import ApexDoc from '../engine/ApexDoc';
import ApexDocError from './ApexDocError';
import Utils, { Option } from './Utils';
import { ApexDocConfig, IApexDocConfig, ISourceEntry } from './models/settings';
import { existsSync } from 'fs';

class Guards {
    [key: string]: any;

    public constructor(private config: IApexDocConfig) {
        this.config = config;
    }

    public validate() {
        const keys = Object.keys(this.config);
        for (var key of keys) {
            // we validate port only when running doc server
            if (key !== 'port') {
                this[key]();
            }
        }
    }

    public includes() {
        this.stringArray(this.config.includes, 'includes');
    }

    public excludes() {
        this.stringArray(this.config.includes, 'excludes');
    }

    public cleanDir() {
        this.boolGuard(this.config.cleanDir, 'cleanDir', false);
    }

    public showTOCSnippets() {
        this.boolGuard(this.config.showTOCSnippets, 'showTOCSnippets', true);
    }

    public subtitle() {
        this.typeGuard('string', this.config.subtitle, 'subtitle');
    }

    public pages() {
        this.config.pages = this.stringArray(this.config.pages, 'pages').map(path =>
            this.directory(path, 'pages', '.html'));
    }


    public assets() {
        // do not validate directory on assets, user will be warned at runtime
        this.config.assets = this.stringArray(this.config.assets, 'assets').map(path =>
            Utils.resolveWorkspaceFolder(path));
    }

    public targetDirectory() {
        const path = this.config.targetDirectory;
        this.typeGuard('string', path, 'targetDirectory');
        if (path && path.length > 0) {
            this.config.targetDirectory = Utils.resolveWorkspaceFolder(path);
        } else {
            throw new ApexDocError(ApexDocError.INVALID_TARGET_DIRECTORY(path));
        }
    }

    public homePagePath(): void {
        this.typeGuard('string', this.config.homePagePath, 'homePagePath');
        this.config.homePagePath = this.directory(this.config.homePagePath, 'homePagePath', '.html');
    }

    public sortOrder(): void {
        let sortOrder = this.config.sortOrder;
        this.typeGuard('string', sortOrder, 'sortOrder');
        sortOrder = sortOrder.toLowerCase();
        if (sortOrder === ApexDoc.ORDER_LOGICAL || sortOrder === ApexDoc.ORDER_ALPHA) {
            this.config.sortOrder = sortOrder;
        } else {
            throw new ApexDocError(ApexDocError.INVALID_SORT_ORDER(sortOrder));
        }
    }

    public title() {
        this.typeGuard('string', this.config.title, 'title');
        this.config.title = this.config.title || 'Apex Documentation';
    }

    public port(port: number): void {
        this.typeGuard('number', port, 'port');
        // only allows integers between 0-65535 as port numbers
        if (!/^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(String(port))) {
            throw new ApexDocError(ApexDocError.INVALID_PORT(port));
        }
    }

    public scope() {
        const scopes = this.config.scope;
        this.typeGuard('array', scopes, 'scope');

        if (scopes.length > 6) {
            throw new ApexDocError(ApexDocError.SCOPE_ENTRIES_MAX);
        }

        if (scopes.length === 0) {
            throw new ApexDocError(ApexDocError.SCOPE_ENTRIES_MIN);
        }

        let registeredScopes = new Array<string>();

        scopes.forEach(scope => {
            if (typeof scope !== 'string') {
                throw new ApexDocError(ApexDocError.ONLY_STRINGS('scope'));
            }

            let foundScope = false;
            scope = scope.toLowerCase().trim();
            ApexDoc.SCOPES.forEach(s => {
                if (s.toLowerCase() === scope) {
                    registeredScopes.push(s.toLowerCase());
                    foundScope = true;
                }
            });

            if (!foundScope) {
                throw new ApexDocError(ApexDocError.SCOPE_ENTRY_INVALID(scope));
            }
        });

        this.config.scope = registeredScopes;
    }

    public source() {
        this.config.source = this.config.source.map(src => ({
            path: this.directory(src.path, 'source.path'),
            sourceUrl: this.sourceUrl(src.sourceUrl)
        }));
    }

    private sourceUrl(str: Option<string>): Option<string> {
        if (!str) {
            return undefined;
        }

        this.typeGuard('string', str, 'sourceUrl');
        if (Utils.isURL(str)) {
            return str.trim();
        } else {
            throw new ApexDocError(ApexDocError.INVALID_SOURCE_URL(str));
        }
    }

    private boolGuard<K extends keyof IApexDocConfig>(bool: boolean, field: K, defaultValue: boolean): void {
        if (typeof bool !== 'boolean') {
            this.config[field] = defaultValue;
        }
    }

    private stringArray(arr: string[], argName: string): string[] {
        this.typeGuard('array', arr, argName);
        arr.forEach(item => {
            if (typeof item !== 'string') {
                throw new ApexDocError(ApexDocError.ONLY_STRINGS(argName));
            }
        });

        return arr;
    }

    private typeGuard<T>(type: string, value: T, arg: string): boolean {
        if ((type === 'array' && Array.isArray(value)) || typeof value === type) {
            return true;
        } else {
            throw new ApexDocError(ApexDocError.INVALID_TYPE(arg, type));
        }
    }

    private directory(path: string, arg: string, extension?: string): string {
        this.typeGuard('string', path, arg);
        // blank directory's can be ignored as default for non-required
        // arguments. Source directory will always be populated by this point.
        path = Utils.resolveWorkspaceFolder(path);
        if (path === '' || existsSync(path)) {
            if (path && extension && !path.endsWith(extension)) {
                throw new ApexDocError(ApexDocError.INVALID_EXTENSION(arg, path, extension));
            }
            return path;
        } else {
            throw new ApexDocError(ApexDocError.INVALID_DIRECTORY(arg, path));
        }
    }
}

export default Guards;
