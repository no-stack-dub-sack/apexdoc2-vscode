export default `<!DOCTYPE html>
<html lang="en">

  <head>
    <title>My Test Docs</title>
    <meta charset="UTF-8">
    <script type="text/javascript" src="./assets/index.js"></script>
    <script charset="UTF-8" src="./assets/highlight.js"></script>
    <link rel="stylesheet" href="./assets/highlight.css" />
    <link rel="stylesheet" type="text/css" href="./assets/index.css" />
    <link rel="shortcut icon" type="image/png" href="./assets/favicon.png" />
  </head>

  <body>
    <div class="topsection">
      <table>
        <tr>
          <td>
            <img src="./assets/apexdoc2-logo.png" style="height: 90px; margin-left: 5px;" />
          </td>
          <td>
            <h2 style="margin: -15px 0 0 0;">ApexDoc2 | Apex Documentation</h2>Check out the GitHub project at:<br />
            <a href="https://github.com/no-stack-dub-sack/ApexDoc2-VSCode">
              https://github.com/no-stack-dub-sack/ApexDoc2-VSCode
            </a>
            <br />
          </td>
        </tr>
      </table>
    </div>
    <table width="100%">

      <tr>
        <td colspan="2" style="text-align: center;">
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
      <tr style="vertical-align:top;">
        <!-- 22% width accommodates 40 char class names -->
        <td width="22%" vertical-align="top">
          <div class="navbar">
            <nav role="navigation">
              <a class="navHeader" id="home" href="javascript:void(0)" onclick="goToLocation('index.html');">
                Home
              </a>
              <details id="Assertions" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Assertions" class="navHeader">
                  <span>Assertions</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_Annotations" class="navItem class public" onclick="goToLocation('TEST_Annotations.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_Annotations</a>
                  </li>
                  <li id="item-TEST_EnumClass" class="navItem class public" onclick="goToLocation('TEST_EnumClass.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_EnumClass</a>
                  </li>
                  <li id="item-TEST_EnumInner" class="navItem class public" onclick="goToLocation('TEST_EnumInner.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_EnumInner</a>
                  </li>
                  <li id="item-TEST_InterfaceClass" class="navItem class global" onclick="goToLocation('TEST_InterfaceClass.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_InterfaceClass</a>
                  </li>
                  <li id="item-TEST_Links" class="navItem class public" onclick="goToLocation('TEST_Links.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_Links</a>
                  </li>
                  <li id="item-TEST_Methods" class="navItem class public" onclick="goToLocation('TEST_Methods.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_Methods</a>
                  </li>
                  <li id="item-TEST_MultiLineTagValues" class="navItem class public" onclick="goToLocation('TEST_MultiLineTagValues.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_MultiLineTagValues</a>
                  </li>
                  <li id="item-TEST_NestedClasses" class="navItem class public" onclick="goToLocation('TEST_NestedClasses.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_NestedClasses</a>
                  </li>
                  <li id="item-TEST_Properties" class="navItem class public" onclick="goToLocation('TEST_Properties.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_Properties</a>
                  </li>
                </ul>
              </details>
              <details id="Feature1" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Feature1" class="navHeader">
                  <span>Feature1</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-TEST_ArrayUtils" class="navItem class global" onclick="goToLocation('TEST_ArrayUtils.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_ArrayUtils</a>
                  </li>
                  <li id="item-TEST_BotField" class="navItem class public" onclick="goToLocation('TEST_BotField.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotField</a>
                  </li>
                  <li id="item-TEST_BotHandler" class="navItem class public" onclick="goToLocation('TEST_BotHandler.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotHandler</a>
                  </li>
                  <li id="item-TEST_BotItem" class="navItem class public" onclick="goToLocation('TEST_BotItem.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotItem</a>
                  </li>
                  <li id="item-TEST_BotMessage" class="navItem class public" onclick="goToLocation('TEST_BotMessage.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_BotMessage</a>
                  </li>
                  <li id="item-TEST_HandlerSOQL" class="navItem class public" onclick="goToLocation('TEST_HandlerSOQL.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_HandlerSOQL</a>
                  </li>
                  <li id="item-TEST_IllegalStateException" class="navItem class global" onclick="goToLocation('TEST_IllegalStateException.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_IllegalStateException</a>
                  </li>
                  <li id="item-TEST_ISObjectComparator" class="navItem class global" onclick="goToLocation('TEST_ISObjectComparator.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_ISObjectComparator</a>
                  </li>
                  <li id="item-TEST_JWT" class="navItem class public" onclick="goToLocation('TEST_JWT.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_JWT</a>
                  </li>
                  <li id="item-TEST_LIFXController" class="navItem class public" onclick="goToLocation('TEST_LIFXController.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_LIFXController</a>
                  </li>
                  <li id="item-TEST_MyRestResource" class="navItem class global" onclick="goToLocation('TEST_MyRestResource.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_MyRestResource</a>
                  </li>
                  <li id="item-TEST_PrimitiveComparator" class="navItem class global" onclick="goToLocation('TEST_PrimitiveComparator.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_PrimitiveComparator</a>
                  </li>
                  <li id="item-TEST_SampleDataController" class="navItem class public" onclick="goToLocation('TEST_SampleDataController.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_SampleDataController</a>
                  </li>
                  <li id="item-TEST_SlackOpportunityPublisher" class="navItem class public" onclick="goToLocation('TEST_SlackOpportunityPublisher.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_SlackOpportunityPublisher</a>
                  </li>
                  <li id="item-TEST_StopWatch" class="navItem class global" onclick="goToLocation('TEST_StopWatch.html');">
                    <a tabindex="1" href="javascript:void(0)">TEST_StopWatch</a>
                  </li>
                </ul>
              </details>
              <details id="Miscellaneous" class="groupName">
                <summary onclick="toggleActiveClass(this);" id="header-Miscellaneous" class="navHeader">
                  <span>Miscellaneous</span>
                </summary>
                <ul>
                  <!-- menu items will be appended here -->
                  <li id="item-IncludeOne" class="navItem class public" onclick="goToLocation('IncludeOne.html');">
                    <a tabindex="1" href="javascript:void(0)">IncludeOne</a>
                  </li>
                  <li id="item-IncludeTwo" class="navItem class public" onclick="goToLocation('IncludeTwo.html');">
                    <a tabindex="1" href="javascript:void(0)">IncludeTwo</a>
                  </li>
                </ul>
              </details>
            </nav>
          </div>
        </td>
        <td class="contentTD">
          <details class="section" open>
            <summary>
              <h2 class="sectionTitle" id="TEST_BotMessage">

                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L12">
                  TEST_BotMessage
                </a><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="externalLink"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" class="externalLink"></path></svg></span>
              </h2>
            </summary>



            <div class="classSignature">

              <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L12">
                public virtual class TEST_BotMessage
              </a>
            </div>
            <div class="classDetails">
              <div class="">The <code class="inlineCode">BotMessage</code> class. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nis.</div>
              <div class="classSubtitle ">See</div>
              <div class="classSubDescription"><a target="_blank" rel="noopener noreferrer" href="https://github.com/dreamhouseapp/dreamhouse-sfdx/blob/master/LICENSE">License</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/dreamhouseapp/dreamhouse-sfdx">Github</a></div><br />Salesforce.com<br />Jul 2017
            </div>
            <p />
            <details class="subSection properties TEST_BotMessage" open>
              <summary>
                <h2 class="subsectionTitle properties">Properties</h2>
              </summary>

              <div class="subsectionContainer">
                <table class="attrTable properties">

                  <tr>
                    <th>Name</th>
                    <th>Signature</th>
                    <th>Annotations</th>

                  </tr>
                  <tr class="property public">
                    <td class="attrName">author</td>
                    <td class="attrSignature">
                      <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L14">
                        public String <span class="hljs-title">author<span>
                </a></td>
                <td><div class="propAnnotations">@AuraEnabled</div></td>
                
            </tr>
            <tr class="property public">
                <td class="attrName">buttons</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L18">
                    public List&lt;BotMessageButton&gt; <span class="hljs-title">buttons<span>
                </a></td>
                <td><div class="propAnnotations">@AuraEnabled</div></td>
                
            </tr>
            <tr class="property public">
                <td class="attrName">imageURL</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L19">
                    public String <span class="hljs-title">imageURL<span>
                </a></td>
                <td><div class="propAnnotations">@AuraEnabled</div></td>
                
            </tr>
            <tr class="property public">
                <td class="attrName">items</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L17">
                    public List&lt;BotItem&gt; <span class="hljs-title">items<span>
                </a></td>
                <td><div class="propAnnotations">@AuraEnabled</div></td>
                
            </tr>
            <tr class="property public">
                <td class="attrName">messageText</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L15">
                    public String <span class="hljs-title">messageText<span>
                </a></td>
                <td><div class="propAnnotations">@AuraEnabled</div></td>
                
            </tr>
            <tr class="property public">
                <td class="attrName">records</td>
                <td class="attrSignature">
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L16">
                    public List&lt;BotRecord&gt; <span class="hljs-title">records<span>
                </a></td>
                <td><div class="propAnnotations">@AuraEnabled</div></td>
                
            </tr>
                </table>
            </div>
            <p />
            </details>
            <details class="subSection methods" open>
                <summary><h2 class="subsectionTitle methods">Methods</h2></summary>
                <div class="methodsContainer">
                <ul class="methodTOC"><li class="method public">
                <a class="methodTOCEntry " href="#TEST_BotMessage.BotMessage">
                    BotMessage
                </a><div class="methodTOCDescription">Default constructor</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_BotMessage.BotMessage_1">
                    BotMessage
                </a><div class="methodTOCDescription">Convenience constructor to create a simple bot message.</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_BotMessage.BotMessage_2">
                    BotMessage
                </a><div class="methodTOCDescription">Convenience constructor to create a simple bot message.</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_BotMessage.BotMessage_3">
                    BotMessage
                </a><div class="methodTOCDescription">Convenience constructor to create a simple bot message.</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_BotMessage.BotMessage_4">
                    BotMessage
                </a><div class="methodTOCDescription">Convenience constructor to create a simple bot message.</div></li><li class="method public">
                <a class="methodTOCEntry " href="#TEST_BotMessage.BotMessage_5">
                    BotMessage
                </a><div class="methodTOCDescription">Convenience constructor to create a simple bot message.</div></li></ul>
                <div class="method public"><h2 class="methodHeader " id="TEST_BotMessage.BotMessage">BotMessage</h2>
            <div class="methodSignature">
                
                <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L24">
                    public <span class="hljs-title">BotMessage</span>()
                      </a>
              </div>
              <div class="methodDescription">Default constructor</div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_BotMessage.BotMessage_1">BotMessage</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L37">
                    public <span class="hljs-title">BotMessage</span>(String author, String messageText)
                  </a>
                </div>
                <div class="methodDescription">Convenience constructor to create a simple bot message.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">author</div>
                <div class="paramDescription">Author param description</div>
                <div class="paramName">messageText</div>
                <div class="paramDescription">Message text param description. If you&#39;re reading this in code, the &#39;see&#39; tag below, serves no other purpose than to demonstrate using overload selectors, e.g. <code class="inlineCode">SomeClass.SomeOverloadedMethod[3]</code> to link a specific method overload in your documentation. The below example links to the 3rd overload of the <code class="inlineCode">BotResponse</code> constructor.</div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><span title="A valid link could not be created with this identifier.">TEST_BotResponse.BotResponse</span></div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_BotMessage.BotMessage_2">BotMessage</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L49">
                    public <span class="hljs-title">BotMessage</span>(String author, String messageText, List&lt;BotRecord&gt; records)
                  </a>
                </div>
                <div class="methodDescription">Convenience constructor to create a simple bot message.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">author</div>
                <div class="paramDescription">Author param description</div>
                <div class="paramName">messageText</div>
                <div class="paramDescription">Message text param description</div>
                <div class="paramName">records</div>
                <div class="paramDescription">A list of <code class="inlineCode">BotRecord</code>s</div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><span title="A valid link could not be created with this identifier.">TEST_BotRecord</span></div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_BotMessage.BotMessage_3">BotMessage</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L62">
                    public <span class="hljs-title">BotMessage</span>(String author, String messageText, List&lt;BotItem&gt; items)
                  </a>
                </div>
                <div class="methodDescription">Convenience constructor to create a simple bot message.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">author</div>
                <div class="paramDescription">Author param description</div>
                <div class="paramName">messageText</div>
                <div class="paramDescription">Message text param description</div>
                <div class="paramName">items</div>
                <div class="paramDescription">A list of <code class="inlineCode">BotItem</code>s</div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><a href="javascript:void(0)" onclick="goToLocation('TEST_BotItem.html')">TEST_BotItem</a></div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_BotMessage.BotMessage_4">BotMessage</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L75">
                    public <span class="hljs-title">BotMessage</span>(String author, String messageText, List&lt;BotMessageButton&gt; buttons)
                  </a>
                </div>
                <div class="methodDescription">Convenience constructor to create a simple bot message.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">author</div>
                <div class="paramDescription">Author param description</div>
                <div class="paramName">messageText</div>
                <div class="paramDescription">Message text param description</div>
                <div class="paramName">items</div>
                <div class="paramDescription">A list of <code class="inlineCode">BotMessageButton</code>s</div>
                <div class="methodSubTitle ">See</div>
                <div class="methodSubDescription"><span title="A valid link could not be created with this identifier.">TEST_BotMessageButton</span></div>
              </div>
              <div class="method public">
                <h2 class="methodHeader " id="TEST_BotMessage.BotMessage_5">BotMessage</h2>
                <div class="methodSignature">

                  <a target="_blank" rel="noopener noreferrer" title="Go to source" class="hostedSourceLink" href="https://somefakeurl.com/TEST_BotMessage.cls#L87">
                    public <span class="hljs-title">BotMessage</span>(String author, String messageText, String imageURL)
                  </a>
                </div>
                <div class="methodDescription">Convenience constructor to create a simple bot message.</div>
                <div class="methodSubTitle">Parameters</div>
                <div class="paramName">author</div>
                <div class="paramDescription">Author param description</div>
                <div class="paramName">messageText</div>
                <div class="paramDescription">Message text param description</div>
                <div class="paramName">imageURL</div>
                <div class="paramDescription">ImageURL param description</div>
              </div>
              </div>
            </details>
          </details>
          </div>
        </td>
      </tr>
    </table>
    <hr />
    <center class="footer">
      <a href="https://github.com/no-stack-dub-sack/ApexDoc2-VSCode" target="_blank" rel="noopener noreferrer">
        Powered By ApexDoc2
      </a>
    </center>
  </body>

</html>`;