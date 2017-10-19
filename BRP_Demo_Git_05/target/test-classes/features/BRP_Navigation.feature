#Author: daniel.mostovyak@cgi.com
#Keywords Summary : 
#Feature: List of scenarios.
#Scenario: Navigation on the given page
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@tag3
Feature: Navigation on the page
	
@tag3
Scenario Outline: Links validation on the Home page
Given the browser is "<Browser>" and we navigate to "<HomePage>" and local is "<Local>" and function is "<Function>"
	And the "<Target>" elements are displayed
Then all "<Section>" links return valid pages


Examples:
|Browser  |HomePage                                        |Local |Function  |Target  |Section |
|Firefox  |https://preprod.www.brp.ca/off-road/           |en_CA |BYO       |Models   |Footer  | 

