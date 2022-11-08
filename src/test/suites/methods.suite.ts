import * as assert from 'assert';
import cheerio from 'cheerio';
import {
    head,
    last,
    only,
    tail
    } from '../../common/ArrayUtils';
import { ITestFile } from '../..';

export const createMethodsSuite = (files: ITestFile[]) => {
    suite('Methods', function() {
        test('Should correctly parse public methods', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const methodNames = $('li.method.public').children('a').toArray().map(el => $(el).text().trim());
            assert.deepEqual(methodNames, ['method1 ()', 'method10 (int, int2, int3, int4)', "method14 (int, int2, int3, int4)"], 'Incorrect public method names found');
        });

        test('Should correctly parse protected methods', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const methodNames = $('li.method.protected').children('a').toArray().map(el => $(el).text().trim());
            assert.deepEqual(methodNames, ['method12 (crazyType, int2, int3, int22)', 'method3 ()'], 'Incorrect public method names found');
        });

        test('Should correctly parse global methods', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const methods = $('li.method.global');
            const methodName = methods.children('a').text().trim();
            assert.equal(methods.length, 1, 'Incorrectly number of global methods found');
            assert.equal(methodName, 'method4 ()', 'Incorrect global method name found');
        });

        test('Should correctly parse explicitly private methods and implicitly private methods whose signatures start with known keywords/collections', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const methodNames = $('li.method.private').children('a').toArray().map(el => $(el).text().trim());
            const expectedMethodNames = ['method11 (crazyType, int2, int3, int22)', 'method2 ()','method5 ()','method6 ()','method7 ()','method8 ()','method9 ()'];
            assert.deepEqual(methodNames, expectedMethodNames, 'Incorrect private method name found');
        });

        test('Should correctly link overloaded methods', function() {
            const testFile = last(only(files, ['TEST_Links.html'], 'name'));
            let $ = cheerio.load(testFile.snapshot);

            const hrefs = $('a.methods-toc__entry').toArray()
                .filter(el => $(el).text().includes('getInt'))
                .map(el => $(el).attr('href'));

            const ids = $('h4.method-title').toArray()
                .filter(el => $(el).text().includes('getInt'))
                .map(el => $(el).attr('id'));

            const expectedIds = ['TEST_Links.getInt', 'TEST_Links.getInt_1', 'TEST_Links.getInt_2', 'TEST_Links.getInt_3' ];
            const expectedHrefs = ['#TEST_Links.getInt', '#TEST_Links.getInt_1', '#TEST_Links.getInt_2', '#TEST_Links.getInt_3' ];

            assert.deepEqual(hrefs, expectedHrefs, 'Method overloads are not correctly linked to their TOC entries.');
            assert.deepEqual(ids, expectedIds, 'Method overloads are not correctly linked to their TOC entries.');
        });

        test('Should have param for every given "@param" tag', function() {
            const testFile = last(only(files, ['TEST_Links.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const params = $('.param-name').toArray().map(el => $(el).text().trim());
            const expectedParams = ['int', 'int2', 'int3', 'int4'];
            assert.deepEqual(params, expectedParams, 'Params do not match.');
        });

        test('Should have param description for every given "@param" tag', function() {
            const testFile = last(only(files, ['TEST_Links.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const descriptions = $('.param-description').toArray().map(el => $(el).text().trim());
            const expectedDescriptions = ['int desc', 'int2 desc', 'int3 desc', 'int4 desc'];
            assert.deepEqual(descriptions, expectedDescriptions, 'Param descriptions do not match.');
        });

        test('Should correctly document the type for every given "@param" tag', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const types = $('.method.public .param-type').toArray().map(el => $(el).text().trim());
            const expectedTypes = ['Type: Integer','Type: String','Type: Double','Type: Set<String>','Type: Integer','Type: String','Type: Double','Type: Set<String>'];

            assert.deepEqual(types, expectedTypes, 'Param types do not match.');
        });

        test('Should correctly document complex, nested, and custom types for every given "@param" tag', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const types = $('.method.private .param-type').toArray().map(el => $(el).text().trim());
            const expectedTypes = [
                'Type: Map<String, Map<SomeCustomClass.InnerClass, Map<Int, List<Map<String, Integer>>>>>',
                'Type: List<String>',
                'Type: OuterClass.InnerType',
                'Type: Integer'];

            assert.deepEqual(types, expectedTypes, 'Param types do not match.');
        });

        test('Should correctly document types ONLY for given "@param" tags', function() {
            const testFile = last(only(files, ['TEST_Methods.html'], 'name'));
            const $ = cheerio.load(testFile.snapshot);

            const types = $('.method.protected .param-type').toArray().map(el => $(el).text().trim());
            const expectedTypes = ['Type: Map<String, Map<SomeCustomClass.InnerClass, Map<Int, List<Map<String, Integer>>>>>','Type: Integer'];

            assert.deepEqual(types, expectedTypes, 'Param types do not match.');
        });
    });
};
