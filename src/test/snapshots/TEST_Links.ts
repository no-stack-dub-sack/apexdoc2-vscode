export default `<!DOCTYPE html>
<html lang="en">

  <head>
    <title>My Test Docs</title>
    <meta charset="UTF-8">
    <script type="module" src="./assets/index.js"></script>
    <script type="module" src="./assets/search-idx.js"></script>
    <script type="module" src="./assets/search.js"></script>
    <script charset="UTF-8" src="./assets/highlight.js"></script>
    <script charset="UTF-8" src="./assets/mark.js"></script>
    <script charset="UTF-8" src="./assets/lunr.js"></script>
    <link rel="stylesheet" href="./assets/highlight.css" />
    <link rel="stylesheet" type="text/css" href="./assets/index.css" />
    <link rel="shortcut icon" type="image/png" href="./assets/favicon.png" />
  </head>

  <body>
    <div id="side-bar">

      <div id="logo-container">
        <div class="title">
          My Test Docs
        </div>
        <img src="assets/logo.png" />
        <div class="subtitle">
          Powered by <a target="_blank" rel="noopener noreferrer" href="https://github.com/no-stack-dub-sack/apexdox-vs-code">ApexDox VS Code</a>
        </div>
      </div>
      <div id="search-wrapper">
        <div class="search-icon"></div>
        <input id="search-input" type="text" autocomplete="off" placeholder="Search...">
      </div>
      <ul id="search-results" class=""></ul>
      <div class="navbar">
        <nav role="navigation">
          <a class="nav-header" id="home" href="javascript:void(0)" onclick="goToLocation('index.html');">
            Home
          </a>
          <details id="Assertions" class="group-name">
            <summary id="header-Assertions" class="nav-header">
              <span>Assertions</span>
            </summary>
            <ul>
              <!-- menu items -->
              <li title="TEST_Annotations" id="item-TEST_Annotations" class="nav-item class public" onclick="goToLocation('TEST_Annotations.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_Annotations</a>
              </li>
              <li title="TEST_EnumClass" id="item-TEST_EnumClass" class="nav-item class public" onclick="goToLocation('TEST_EnumClass.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_EnumClass</a>
              </li>
              <li title="TEST_EnumInner" id="item-TEST_EnumInner" class="nav-item class public" onclick="goToLocation('TEST_EnumInner.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_EnumInner</a>
              </li>
              <li title="TEST_InterfaceClass" id="item-TEST_InterfaceClass" class="nav-item class global" onclick="goToLocation('TEST_InterfaceClass.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_InterfaceClass</a>
              </li>
              <li title="TEST_Links" id="item-TEST_Links" class="nav-item class public" onclick="goToLocation('TEST_Links.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_Links</a>
              </li>
              <li title="TEST_Methods" id="item-TEST_Methods" class="nav-item class public" onclick="goToLocation('TEST_Methods.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_Methods</a>
              </li>
              <li title="TEST_MultiLineTagValues" id="item-TEST_MultiLineTagValues" class="nav-item class public" onclick="goToLocation('TEST_MultiLineTagValues.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_MultiLineTagValues</a>
              </li>
              <li title="TEST_NestedClasses" id="item-TEST_NestedClasses" class="nav-item class public" onclick="goToLocation('TEST_NestedClasses.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_NestedClasses</a>
              </li>
              <li title="TEST_Properties" id="item-TEST_Properties" class="nav-item class public" onclick="goToLocation('TEST_Properties.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_Properties</a>
              </li>
            </ul>
          </details>
          <details id="Feature1" class="group-name">
            <summary id="header-Feature1" class="nav-header">
              <span>Feature1</span>
            </summary>
            <ul>
              <!-- menu items -->
              <li title="TEST_ArrayUtils" id="item-TEST_ArrayUtils" class="nav-item class global" onclick="goToLocation('TEST_ArrayUtils.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_ArrayUtils</a>
              </li>
              <li title="TEST_BotField" id="item-TEST_BotField" class="nav-item class public" onclick="goToLocation('TEST_BotField.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_BotField</a>
              </li>
              <li title="TEST_BotHandler" id="item-TEST_BotHandler" class="nav-item class public" onclick="goToLocation('TEST_BotHandler.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_BotHandler</a>
              </li>
              <li title="TEST_BotItem" id="item-TEST_BotItem" class="nav-item class public" onclick="goToLocation('TEST_BotItem.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_BotItem</a>
              </li>
              <li title="TEST_BotMessage" id="item-TEST_BotMessage" class="nav-item class public" onclick="goToLocation('TEST_BotMessage.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_BotMessage</a>
              </li>
              <li title="TEST_HandlerSOQL" id="item-TEST_HandlerSOQL" class="nav-item class public" onclick="goToLocation('TEST_HandlerSOQL.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_HandlerSOQL</a>
              </li>
              <li title="TEST_IllegalStateException" id="item-TEST_IllegalStateException" class="nav-item class global" onclick="goToLocation('TEST_IllegalStateException.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_IllegalStateException</a>
              </li>
              <li title="TEST_ISObjectComparator" id="item-TEST_ISObjectComparator" class="nav-item class global" onclick="goToLocation('TEST_ISObjectComparator.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_ISObjectComparator</a>
              </li>
              <li title="TEST_JWT" id="item-TEST_JWT" class="nav-item class public" onclick="goToLocation('TEST_JWT.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_JWT</a>
              </li>
              <li title="TEST_LIFXController" id="item-TEST_LIFXController" class="nav-item class public" onclick="goToLocation('TEST_LIFXController.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_LIFXController</a>
              </li>
              <li title="TEST_MyRestResource" id="item-TEST_MyRestResource" class="nav-item class global" onclick="goToLocation('TEST_MyRestResource.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_MyRestResource</a>
              </li>
              <li title="TEST_PrimitiveComparator" id="item-TEST_PrimitiveComparator" class="nav-item class global" onclick="goToLocation('TEST_PrimitiveComparator.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_PrimitiveComparator</a>
              </li>
              <li title="TEST_SampleDataController" id="item-TEST_SampleDataController" class="nav-item class public" onclick="goToLocation('TEST_SampleDataController.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_SampleDataController</a>
              </li>
              <li title="TEST_SlackOpportunityPublisher" id="item-TEST_SlackOpportunityPublisher" class="nav-item class public" onclick="goToLocation('TEST_SlackOpportunityPublisher.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_SlackOpportunityPublisher</a>
              </li>
              <li title="TEST_StopWatch" id="item-TEST_StopWatch" class="nav-item class global" onclick="goToLocation('TEST_StopWatch.html');">
                <a tabindex="1" href="javascript:void(0)">TEST_StopWatch</a>
              </li>
            </ul>
          </details>
          <details id="Miscellaneous" class="group-name">
            <summary id="header-Miscellaneous" class="nav-header">
              <span>Miscellaneous</span>
            </summary>
            <ul>
              <!-- menu items -->
              <li title="IncludeOne" id="item-IncludeOne" class="nav-item class public" onclick="goToLocation('IncludeOne.html');">
                <a tabindex="1" href="javascript:void(0)">IncludeOne</a>
              </li>
              <li title="IncludeTwo" id="item-IncludeTwo" class="nav-item class private" onclick="goToLocation('IncludeTwo.html');">
                <a tabindex="1" href="javascript:void(0)">IncludeTwo</a>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </div>
    <table id="content">
      <tr>
        <td class="scoping-panel">
          Show: <input type="checkbox" checked="true" id="cbx-all" onclick="toggleAllScopes(this.checked);" />
          <label for="cbx-all">All</label>&nbsp;&nbsp;
          <input type="checkbox" checked="true" id="cbx-public" onclick="toggleScope('public', this.checked);" />
          <label for="cbx-public">
            public
          </label>&nbsp;&nbsp;<input type="checkbox" checked="true" id="cbx-private" onclick="toggleScope('private', this.checked);" />
          <label for="cbx-private">
            private
          </label>&nbsp;&nbsp;<input type="checkbox" checked="true" id="cbx-protected" onclick="toggleScope('protected', this.checked);" />
          <label for="cbx-protected">
            protected
          </label>&nbsp;&nbsp;<input type="checkbox" checked="true" id="cbx-global" onclick="toggleScope('global', this.checked);" />
          <label for="cbx-global">
            global
          </label>
        </td>
      </tr>
      <tr>
        <td class="doc-page">

          <div class="section">

            <h2 class="class-title top-level-type" id="TEST_Links">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="source-link" href="https://somefakeurl.com/TEST_Links.cls#L21">
                TEST_Links
              </a>
            </h2>
            <div class="class-container">

              <div class="class-description">
                Test our see links: Markdown URL, regular URL, Class Link, Method Link, Method Link w/ Overload Selector. Also test that overloads are correctly linked within their own class, method TOC entry : correct overloaded method. Test inline link syntax: <a href="javascript:void(0)" onclick="goToLocation('TEST_Links.html#TEST_Links.getInt')">TEST_Links.getInt</a>, and another one: <a href="javascript:void(0)" onclick="goToLocation('TEST_Methods.html#TEST_Methods.method10')">TEST_Methods.method10</a>, and markdown link: <a target="_blank" rel="noopener noreferrer" href="http://code.google.com/p/apex-lang/">Markdown Link</a>, and regular link: <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">https://www.google.com</a>
              </div>
              <div class="class-subtitle">
                Signature
              </div>

              <div class="class-signature">
                public class TEST_Links
              </div>
              <div class="class-subtitle">
                See
              </div>
              <div class="class-subtitle-description">
                <a target="_blank" rel="noopener noreferrer" href="http://code.google.com/p/apex-lang/">Markdown Link</a>, <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">https://www.google.com</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html')">TEST_ArrayUtils</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html#TEST_ArrayUtils.qsort')">TEST_ArrayUtils.qsort</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_ArrayUtils.html#TEST_ArrayUtils.qsort_2')">TEST_ArrayUtils.qsort</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_NestedClasses.html#TEST_NestedClasses.ConcreteChildClass')">TEST_NestedClasses.ConcreteChildClass</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_NestedClasses.html#TEST_NestedClasses.ConcreteChildClass.overloadedMethod')">TEST_NestedClasses.ConcreteChildClass.overloadedMethod</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_NestedClasses.html#TEST_NestedClasses.ConcreteChildClass.overloadedMethod_1')">TEST_NestedClasses.ConcreteChildClass.overloadedMethod</a>, <span title="A valid link could not be created with this identifier.">ThisOneShouldFail</span>
              </div>
              <div class="class-subtitle">
                Author
              </div>
              <div class="class-subtitle-description">
                Bill C Riemers
              </div>
              <div class="class-subtitle">
                Since
              </div>
              <div class="class-subtitle-description">
                <li>2022-10-05 Added changelog</li>
              </div>
            </div>
            <div class="subsection methods">
              <h3 class="subsection-title methods">TEST_Links Methods</h3>
              <div class="methods-container">
                <ul class="methods-toc">
                  <li class="method public">
                    <a class="methods-toc__entry " href="#TEST_Links.getInt">
                      getInt ()
                    </a>

                  </li>
                  <li class="method public">
                    <a class="methods-toc__entry " href="#TEST_Links.getInt_1">
                      getInt (int, int2)
                    </a>

                    <div class="methods-toc__description">
                      Static method overload 1
                    </div>
                  </li>
                  <li class="method public">
                    <a class="methods-toc__entry " href="#TEST_Links.getInt_2">
                      getInt (int, int2, int3)
                    </a>

                    <div class="methods-toc__description">
                      Static method overload 2
                    </div>
                  </li>
                  <li class="method public">
                    <a class="methods-toc__entry " href="#TEST_Links.getInt_3">
                      getInt (int, int2, int3, int4)
                    </a>

                    <div class="methods-toc__description">
                      Static method overload 3
                    </div>
                  </li>
                </ul>
                <div class="method public">
                  <h4 class="method-title " id="TEST_Links.getInt">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="source-link" href="https://somefakeurl.com/TEST_Links.cls#L26">
                      getInt()
                    </a>
                  </h4>
                  <div class="method-subtitle">
                    Signature
                  </div>

                  <div class="method-signature">
                    public static Integer getInt()
                  </div>
                  <div class="method-subtitle">
                    See
                  </div>
                  <div class="method-subtitle-description">
                    <a href="javascript:void(0)" onclick="goToLocation('TEST_Links.html#TEST_Links.getInt_1')">TEST_Links.getInt</a>, <a href="javascript:void(0)" onclick="goToLocation('TEST_Links.html#TEST_Links.getInt_3')">TEST_Links.getInt</a>
                  </div>
                </div>
                <div class="method public">
                  <h4 class="method-title " id="TEST_Links.getInt_1">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="source-link" href="https://somefakeurl.com/TEST_Links.cls#L29">
                      getInt(int, int2)
                    </a>
                  </h4>
                  <div class="method-description">
                    Static method overload 1
                  </div>
                  <div class="method-subtitle">
                    Signature
                  </div>

                  <div class="method-signature">
                    public static Integer getInt(Integer int, Integer int2)
                  </div>
                </div>
                <div class="method public">
                  <h4 class="method-title " id="TEST_Links.getInt_2">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="source-link" href="https://somefakeurl.com/TEST_Links.cls#L34">
                      getInt(int, int2, int3)
                    </a>
                  </h4>
                  <div class="method-description">
                    Static method overload 2
                  </div>
                  <div class="method-subtitle">
                    Signature
                  </div>

                  <div class="method-signature">
                    public static Integer getInt(Integer int, Integer int2, Integer int3)
                  </div>
                </div>
                <div class="method public">
                  <h4 class="method-title " id="TEST_Links.getInt_3">

                    <a target="_blank" rel="noopener noreferrer" title="Go to source" class="source-link" href="https://somefakeurl.com/TEST_Links.cls#L46">
                      getInt(int, int2, int3, int4)
                    </a>
                  </h4>
                  <div class="method-description">
                    Static method overload 3
                  </div>
                  <div class="method-subtitle">
                    Signature
                  </div>

                  <div class="method-signature">
                    public static Integer getInt(Integer int, Integer int2, Integer int3, Integer int4)
                  </div>
                  <div class="method-subtitle">Parameters</div>
                  <div class="param-name">int</div>
                  <div class="param-type">
                    Type: <code class="code-inline">Integer</code>
                  </div>
                  <div class="param-description">int desc</div>
                  <div class="param-name">int2</div>
                  <div class="param-type">
                    Type: <code class="code-inline">Integer</code>
                  </div>
                  <div class="param-description">int2 desc</div>
                  <div class="param-name">int3</div>
                  <div class="param-type">
                    Type: <code class="code-inline">Integer</code>
                  </div>
                  <div class="param-description">int3 desc</div>
                  <div class="param-name">int4</div>
                  <div class="param-type">
                    Type: <code class="code-inline">Integer</code>
                  </div>
                  <div class="param-description">int4 desc</div>
                  <div class="method-subtitle">
                    Returns
                  </div>
                  <div class="method-subtitle-description">
                    <code class="code-inline">Integer</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </td>
      </tr>
      <tr>
        <td class="footer">

          <div>
            <a href="https://github.com/no-stack-dub-sack/apexdox-vs-code" target="_blank" rel="noopener noreferrer">
              Powered By ApexDox VS Code
            </a>
          </div>
        </td>
      </tr>
    </table>
  </body>

</html>`;