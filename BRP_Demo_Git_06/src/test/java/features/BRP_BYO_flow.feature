Feature: Build Your Own flow
@en_ca
  Scenario Outline: BYO for en_CA
    Given the browser is "<Browser>" and we navigate to "<HomePage>" and local is "<Local>" and function is "<Function>" 
    When the model types are shown
    And we select category: "<Category>" and/or "<ModelYear>"
    And we select the model "<Model>" with index "<ModelIndex>"
    Given the packages are shown
    And we select package "<Package>" with index "<PackageIndex>"
    Given the colors and options are shown
    And we select the color: "<ColorIndex>" and the engine: "<EngineIndex>"
    Given the accessories are shown 
    And we select the accessory "<Accessory>" with index "<AIndex>" and group index "<AGroupIndex>" and expected added number "<AddedANumberExp>"
    And the number of added accessories is as expected: "<AddedANumberExp>"
    Given the Summary page is shown
    And we select Send To Dealer
    Given the Send to Dealer form is shown
    And we fill in FirstName: "<FirstName>", LastName: "<LastName>", EmailAddress: "<Email>", Phone Number: "<Phone>", Address: "<Address>" and PostalCode: "<Zip>"
    And we add Comments: "<Comments>"    
    And we submit Request
    Then the Summary page is shown
    And the final price is valid
    
    
    Examples: Function and home page parameters
 |Browser  |HomePage                                        |Local  |Function |Category |ModelYear|Model |ModelIndex |Package |PackageIndex |ColorIndex |EngineIndex |Accessory |AGroupIndex |AIndex |AddedANumberExp |FirstName |LastName |Email           |Phone       |Address                |Zip    |Comments     |
 |Firefox  |http://54.225.6.59:4503/content/ski-doo/       |en_CA  |BYO      |Ski-Doo  |         |      |2          |        |1            |1          |1           |          |0          |1       |1               |John      |Blues    |john.b@mail.com |825-265 9898|12 St High, Sherbrooke |J1J1J1 |Fast Delivery|
 |Firefox  |http://54.225.6.59:4503/content/canam-spyder/        |en_CA  |BYO      |         |2017     |      |2          |        |1            |1          |1           |          |0          |1       |1               |John      |Blues    |john.b@mail.com |825-265 9898|12 St High, Sherbrooke |J1J1J1 |Fast Delivery|
  
    
@en_us
  Scenario Outline: BYO for en_US
    Given the browser is "<Browser>" and we navigate to "<HomePage>" and local is "<Local>" and function is "<Function>" 
    When the model types are shown
    And we select category: "<Category>" and/or "<ModelYear>"
    And we select the model "<Model>" with index "<ModelIndex>"
    Given the packages are shown
    And we select package "<Package>" with index "<PackageIndex>"
    Given the colors and options are shown
    And we select the color: "<ColorIndex>" and the engine: "<EngineIndex>"
    Given the accessories are shown 
    And we select the accessory "<Accessory>" with index "<AIndex>" and group index "<AGroupIndex>" and expected added number "<AddedANumberExp>"
    And the number of added accessories is as expected: "<AddedANumberExp>"
    Given the Summary page is shown
    And we select Send To Dealer
    Given the Send to Dealer form is shown
    And we fill in FirstName: "<FirstName>", LastName: "<LastName>", EmailAddress: "<Email>", Phone Number: "<Phone>", Address: "<Address>" and PostalCode: "<Zip>"
    And we add Comments: "<Comments>"    
    And we submit Request
    Then the Summary page is shown
    And the final price is valid
    
    
    Examples: Function and home page parameters
 |Browser  |HomePage                                       |Local |Function    |Category  |ModelYear |Model  |ModelIndex |Package   |PackageIndex |ColorIndex |EngineIndex |Accessory |AGroupIndex |AIndex |AddedANumberExp |FirstName |LastName |Email           |Phone       |Address                |Zip    |Comments     |
 |Firefox  |http://54.83.51.229:4503/content/seadoo/        |en_US  |BYO      |Sea-Doo  |         |      |2       |           |1            |1          |1           |          |0          |1       |1               |John      |Blues    |john.b@mail.com |825-265 9898|12 St High, Sherbrooke |J1J1J1 |Fast Delivery|
 |Firefox  |http://54.83.51.229:4503/content/ski-doo/       |en_US  |BYO      |Ski-Doo  |         |      |4       |           |1            |1          |1           |          |0          |1       |1               |John      |Blues    |john.b@mail.com |825-265 9898|12 St High, Sherbrooke |J1J1J1 |Fast Delivery|
 |Firefox  |http://54.83.51.229:4503/content/canam-offroad/ |en_US  |BYO      |SSV      |         |      |1       |           |1            |1          |1           |          |0          |1       |1               |John      |Blues    |john.b@mail.com |825-265 9898|12 St High, Sherbrooke |J1J1J1 |Fast Delivery|
 |Firefox  |http://54.83.51.229:4503/content/canam-offroad/ |en_CA  |BYO      |ATV      |         |      |2          |        |2            |1          |1           |          |0          |1       |1               |John      |Blues    |john.b@mail.com |825-265 9898|12 St High, Sherbrooke |J1J1J1 |Fast Delivery|													
    
  

    
