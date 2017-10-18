$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BRP_Section_BYO_CanAm.feature");
formatter.feature({
  "line": 1,
  "name": "Build Your Own flow",
  "description": "",
  "id": "build-your-own-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "BYO for en_US",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-us",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the browser is \"\u003cBrowser\u003e\" and we navigate to \"\u003cHomePage\u003e\" and local is \"\u003cLocal\u003e\" and function is \"\u003cFunction\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the model types are shown",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "we select category: \"\u003cCategory\u003e\" and/or \"\u003cModelYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "we select the model \"\u003cModel\u003e\" with index \"\u003cModelIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the packages are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "we select package \"\u003cPackage\u003e\" with index \"\u003cPackageIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the colors and options are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "we select the color: \"\u003cColorIndex\u003e\" and the engine: \"\u003cEngineIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the accessories are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "we select the accessory \"\u003cAccessory\u003e\" with index \"\u003cAIndex\u003e\" and group index \"\u003cAGroupIndex\u003e\" and expected added number \"\u003cAddedANumberExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the number of added accessories is as expected: \"\u003cAddedANumberExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the Summary page is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "we select Send To Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the Send to Dealer form is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "we fill in FirstName: \"\u003cFirstName\u003e\", LastName: \"\u003cLastName\u003e\", EmailAddress: \"\u003cEmail\u003e\", Phone Number: \"\u003cPhone\u003e\", Address: \"\u003cAddress\u003e\" and PostalCode: \"\u003cZip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "we add Comments: \"\u003cComments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "we submit Request",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the Summary page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "the final price is valid",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
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
      "line": 57,
      "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;1"
    },
    {
      "cells": [
        "Firefox",
        "http://54.225.6.59:4503/content/canam-spyder/",
        "en_US",
        "BYO",
        "Spyder",
        "2017",
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
      "line": 58,
      "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82310,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "BYO for en_US",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-us;function-and-home-page-parameters;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the browser is \"Firefox\" and we navigate to \"http://54.225.6.59:4503/content/canam-spyder/\" and local is \"en_US\" and function is \"BYO\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the model types are shown",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "we select category: \"Spyder\" and/or \"2017\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "we select the model \"\" with index \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the packages are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "we select package \"\" with index \"1\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the colors and options are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "we select the color: \"1\" and the engine: \"1\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the accessories are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
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
  "line": 45,
  "name": "the number of added accessories is as expected: \"1\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the Summary page is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "we select Send To Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the Send to Dealer form is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
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
  "line": 50,
  "name": "we add Comments: \"Fast Delivery\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "we submit Request",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the Summary page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
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
      "val": "http://54.225.6.59:4503/content/canam-spyder/",
      "offset": 45
    },
    {
      "val": "en_US",
      "offset": 106
    },
    {
      "val": "BYO",
      "offset": 130
    }
  ],
  "location": "Steps.the_browser_is_and_we_navigate_to_and_local_is_and_function_is(String,String,String,String)"
});
formatter.result({
  "duration": 10307431118,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_model_types_are_shown()"
});
formatter.result({
  "duration": 95049131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spyder",
      "offset": 21
    },
    {
      "val": "2017",
      "offset": 37
    }
  ],
  "location": "Steps.we_select_model_type_and_year(String,String)"
});
formatter.result({
  "duration": 217780086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "Steps.we_select_the_model_MODEL_with_index(String,String)"
});
formatter.result({
  "duration": 915930942,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_packages_are_shown()"
});
formatter.result({
  "duration": 3395560548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "Steps.we_select_package_PACKAGE_with_index(String,String)"
});
formatter.result({
  "duration": 166596502,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_colors_and_options_are_shown()"
});
formatter.result({
  "duration": 1425682219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "Steps.we_select_the_color_and_the_engine(String,String)"
});
formatter.result({
  "duration": 2259884653,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_accessories_are_shown()"
});
formatter.result({
  "duration": 1317087435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 89
    }
  ],
  "location": "Steps.we_select_the_accessory_with_index_and_group_index_expected_number(String,String,String,String)"
});
formatter.result({
  "duration": 8195751975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "Steps.the_number_of_added_accessories_is_as_expected(String)"
});
formatter.result({
  "duration": 2046086784,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_confirmation_page_is_shown()"
});
formatter.result({
  "duration": 1061824978,
  "status": "passed"
});
formatter.match({
  "location": "Steps.we_select_SEND_TO_A_DEALER()"
});
formatter.result({
  "duration": 364964273,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_send_to_dealer_form_is_shown()"
});
formatter.result({
  "duration": 1044265016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 23
    },
    {
      "val": "Blues",
      "offset": 41
    },
    {
      "val": "john.b@mail.com",
      "offset": 64
    },
    {
      "val": "825-265 9898",
      "offset": 97
    },
    {
      "val": "12 St High, Sherbrooke",
      "offset": 122
    },
    {
      "val": "J1J1J1",
      "offset": 163
    }
  ],
  "location": "Steps.we_fill_in_FirstName_LastName_EmailAddress_Phone_Number_Address_and_PostalCode(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1171900964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fast Delivery",
      "offset": 18
    }
  ],
  "location": "Steps.we_add_Comments(String)"
});
formatter.result({
  "duration": 601769286,
  "status": "passed"
});
formatter.match({
  "location": "Steps.we_submit_Request()"
});
formatter.result({
  "duration": 327560812,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_confirmation_page_is_shown()"
});
formatter.result({
  "duration": 1068965556,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_final_price_is_valid()"
});
formatter.result({
  "duration": 34504866,
  "status": "passed"
});
formatter.after({
  "duration": 1454511474,
  "status": "passed"
});
formatter.after({
  "duration": 9061,
  "status": "passed"
});
});