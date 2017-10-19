$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BRP_BYO_flow.feature");
formatter.feature({
  "line": 1,
  "name": "Build Your Own flow",
  "description": "",
  "id": "build-your-own-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "BYO for en_US",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-us",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@en_us"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "the browser is \"\u003cBrowser\u003e\" and we navigate to \"\u003cHomePage\u003e\" and local is \"\u003cLocal\u003e\" and function is \"\u003cFunction\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "the model types are shown",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "we select category: \"\u003cCategory\u003e\" and/or \"\u003cModelYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "we select the model \"\u003cModel\u003e\" with index \"\u003cModelIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the packages are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "we select package \"\u003cPackage\u003e\" with index \"\u003cPackageIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the colors and options are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "we select the color: \"\u003cColorIndex\u003e\" and the engine: \"\u003cEngineIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the accessories are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "we select the accessory \"\u003cAccessory\u003e\" with index \"\u003cAIndex\u003e\" and group index \"\u003cAGroupIndex\u003e\" and expected added number \"\u003cAddedANumberExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the number of added accessories is as expected: \"\u003cAddedANumberExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the Summary page is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "we select Send To Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the Send to Dealer form is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "we fill in FirstName: \"\u003cFirstName\u003e\", LastName: \"\u003cLastName\u003e\", EmailAddress: \"\u003cEmail\u003e\", Phone Number: \"\u003cPhone\u003e\", Address: \"\u003cAddress\u003e\" and PostalCode: \"\u003cZip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "we add Comments: \"\u003cComments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "we submit Request",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the Summary page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "the final price is valid",
  "keyword": "And "
});
formatter.examples({
  "line": 53,
  "name": "Function and home page parameters",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters",
  "rows": [
    {
      "cells": [
        "Browser",
        "HomePage",
        "Local",
        "Function",
        "Category",
        "ModelYear",
        "Model",
        "ModelIndex",
        "Package",
        "PackageIndex",
        "ColorIndex",
        "EngineIndex",
        "Accessory",
        "AGroupIndex",
        "AIndex",
        "AddedANumberExp",
        "FirstName",
        "LastName",
        "Email",
        "Phone",
        "Address",
        "Zip",
        "Comments"
      ],
      "line": 54,
      "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;1"
    },
    {
      "cells": [
        "Firefox",
        "http://54.83.51.229:4503/content/seadoo/",
        "en_US",
        "BYO",
        "Sea-Doo",
        "",
        "",
        "2",
        "",
        "1",
        "1",
        "1",
        "",
        "0",
        "1",
        "1",
        "John",
        "Blues",
        "john.b@mail.com",
        "825-265 9898",
        "12 St High, Sherbrooke",
        "J1J1J1",
        "Fast Delivery"
      ],
      "line": 55,
      "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;2"
    },
    {
      "cells": [
        "Firefox",
        "http://54.83.51.229:4503/content/ski-doo/",
        "en_US",
        "BYO",
        "Ski-Doo",
        "",
        "",
        "4",
        "",
        "1",
        "1",
        "1",
        "",
        "0",
        "1",
        "1",
        "John",
        "Blues",
        "john.b@mail.com",
        "825-265 9898",
        "12 St High, Sherbrooke",
        "J1J1J1",
        "Fast Delivery"
      ],
      "line": 56,
      "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;3"
    },
    {
      "cells": [
        "Firefox",
        "http://54.83.51.229:4503/content/canam-offroad/",
        "en_US",
        "BYO",
        "SSV",
        "",
        "",
        "1",
        "",
        "1",
        "1",
        "1",
        "",
        "0",
        "1",
        "1",
        "John",
        "Blues",
        "john.b@mail.com",
        "825-265 9898",
        "12 St High, Sherbrooke",
        "J1J1J1",
        "Fast Delivery"
      ],
      "line": 57,
      "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 87218,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "BYO for en_US",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@en_us"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "the browser is \"Firefox\" and we navigate to \"http://54.83.51.229:4503/content/seadoo/\" and local is \"en_US\" and function is \"BYO\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "the model types are shown",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "we select category: \"Sea-Doo\" and/or \"\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "we select the model \"\" with index \"2\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the packages are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "we select package \"\" with index \"1\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the colors and options are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "we select the color: \"1\" and the engine: \"1\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the accessories are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "we select the accessory \"\" with index \"1\" and group index \"0\" and expected added number \"1\"",
  "matchedColumns": [
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the number of added accessories is as expected: \"1\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the Summary page is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "we select Send To Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the Send to Dealer form is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "we fill in FirstName: \"John\", LastName: \"Blues\", EmailAddress: \"john.b@mail.com\", Phone Number: \"825-265 9898\", Address: \"12 St High, Sherbrooke\" and PostalCode: \"J1J1J1\"",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "we add Comments: \"Fast Delivery\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "we submit Request",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the Summary page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "the final price is valid",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    },
    {
      "val": "http://54.83.51.229:4503/content/seadoo/",
      "offset": 45
    },
    {
      "val": "en_US",
      "offset": 101
    },
    {
      "val": "BYO",
      "offset": 125
    }
  ],
  "location": "Steps.the_browser_is_and_we_navigate_to_and_local_is_and_function_is(String,String,String,String)"
});
formatter.result({
  "duration": 9287356973,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_model_types_are_shown()"
});
formatter.result({
  "duration": 70978862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sea-Doo",
      "offset": 21
    },
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "Steps.we_select_model_type_and_year(String,String)"
});
formatter.result({
  "duration": 235893806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "Steps.we_select_the_model_MODEL_with_index(String,String)"
});
formatter.result({
  "duration": 375942927,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_packages_are_shown()"
});
