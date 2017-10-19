$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BRP_BYO_flow.feature");
formatter.feature({
  "line": 1,
  "name": "Build Your Own flow",
  "description": "",
  "id": "build-your-own-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "BYO for en_CA",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-ca",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@en_ca"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the browser is \"\u003cBrowser\u003e\" and we navigate to \"\u003cHomePage\u003e\" and local is \"\u003cLocal\u003e\" and function is \"\u003cFunction\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the model types are shown",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "we select category: \"\u003cCategory\u003e\" and/or \"\u003cModelYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "we select the model \"\u003cModel\u003e\" with index \"\u003cModelIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the packages are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "we select package \"\u003cPackage\u003e\" with index \"\u003cPackageIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the colors and options are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "we select the color: \"\u003cColorIndex\u003e\" and the engine: \"\u003cEngineIndex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the accessories are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "we select the accessory \"\u003cAccessory\u003e\" with index \"\u003cAIndex\u003e\" and group index \"\u003cAGroupIndex\u003e\" and expected added number \"\u003cAddedANumberExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the number of added accessories is as expected: \"\u003cAddedANumberExp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the Summary page is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "we select Send To Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the Send to Dealer form is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "we fill in FirstName: \"\u003cFirstName\u003e\", LastName: \"\u003cLastName\u003e\", EmailAddress: \"\u003cEmail\u003e\", Phone Number: \"\u003cPhone\u003e\", Address: \"\u003cAddress\u003e\" and PostalCode: \"\u003cZip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "we add Comments: \"\u003cComments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "we submit Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the Summary page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the final price is valid",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "Function and home page parameters",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-ca;function-and-home-page-parameters",
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
      "line": 26,
      "id": "build-your-own-flow;byo-for-en-ca;function-and-home-page-parameters;1"
    },
    {
      "cells": [
        "Firefox",
        "http://54.225.6.59:4503/content/canam-offroad/",
        "en_CA",
        "BYO",
        "ATV",
        "",
        "",
        "2",
        "",
        "7",
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
      "line": 27,
      "id": "build-your-own-flow;byo-for-en-ca;function-and-home-page-parameters;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 78150,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "BYO for en_CA",
  "description": "",
  "id": "build-your-own-flow;byo-for-en-ca;function-and-home-page-parameters;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@en_ca"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the browser is \"Firefox\" and we navigate to \"http://54.225.6.59:4503/content/canam-offroad/\" and local is \"en_CA\" and function is \"BYO\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the model types are shown",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "we select category: \"ATV\" and/or \"\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "we select the model \"\" with index \"2\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the packages are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "we select package \"\" with index \"7\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the colors and options are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "we select the color: \"1\" and the engine: \"1\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the accessories are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
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
  "line": 14,
  "name": "the number of added accessories is as expected: \"1\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the Summary page is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "we select Send To Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the Send to Dealer form is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
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
  "line": 19,
  "name": "we add Comments: \"Fast Delivery\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "we submit Request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the Summary page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
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
      "val": "http://54.225.6.59:4503/content/canam-offroad/",
      "offset": 45
    },
    {
      "val": "en_CA",
      "offset": 107
    },
    {
      "val": "BYO",
      "offset": 131
    }
  ],
  "location": "Steps.the_browser_is_and_we_navigate_to_and_local_is_and_function_is(String,String,String,String)"
});
formatter.result({
  "duration": 16879823797,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_model_types_are_shown()"
});
formatter.result({
  "duration": 122076331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ATV",
      "offset": 21
    },
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "Steps.we_select_model_type_and_year(String,String)"
});
formatter.result({
  "duration": 231776723,
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
  "duration": 1121018103,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_packages_are_shown()"
});
formatter.result({
  "duration": 3476778081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "7",
      "offset": 33
    }
  ],
  "location": "Steps.we_select_package_PACKAGE_with_index(String,String)"
});
formatter.result({
  "duration": 4406990190,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_colors_and_options_are_shown()"
});
formatter.result({
  "duration": 1309159085,
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
  "duration": 2638666112,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_accessories_are_shown()"
});
formatter.result({
  "duration": 1368565171,
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
  "duration": 8572393440,
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
  "duration": 3051215867,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_confirmation_page_is_shown()"
});
formatter.result({
  "duration": 1067574032,
  "status": "passed"
});
formatter.match({
  "location": "Steps.we_select_SEND_TO_A_DEALER()"
});
formatter.result({
  "duration": 386407799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_send_to_dealer_form_is_shown()"
});
formatter.result({
  "duration": 1070272644,
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
  "duration": 548805879,
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
  "duration": 558233655,
  "status": "passed"
});
formatter.match({
  "location": "Steps.we_submit_Request()"
});
formatter.result({
  "duration": 299184640,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_confirmation_page_is_shown()"
});
formatter.result({
  "duration": 1060995127,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_final_price_is_valid()"
});
formatter.result({
  "duration": 63015688,
  "status": "passed"
});
formatter.after({
  "duration": 14346,
  "status": "passed"
});
formatter.after({
  "duration": 65691,
  "status": "passed"
});
});