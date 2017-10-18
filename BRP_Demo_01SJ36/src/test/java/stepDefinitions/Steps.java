package stepDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.File;
import java.net.MalformedURLException;
import java.text.DecimalFormat;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.*;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import utils.DriverFactory;
//import stepDefinitions.brp.brpSpecificObject.BRPRequestOptions;
import web.pages.BRP_Page;


public class Steps {
	
	private static WebDriver driver = null;
	public static WebDriverWait waitVar = null;	
	private StringBuffer verificationErrors = new StringBuffer();
	DesiredCapabilities capabilities = DesiredCapabilities.firefox();
	FirefoxOptions options = new FirefoxOptions();
	String totalPrice;
	String url;
	DriverFactory df = new DriverFactory();
	public static BRP_Page sp;
	public static String localCode;


	
	@Given("^the browser is \"([^\"]*)\" and we navigate to \"([^\"]*)\" and local is \"([^\"]*)\" and function is \"([^\"]*)\"$")
	public void the_browser_is_and_we_navigate_to_and_local_is_and_function_is(String browser, String urlRoot, String local, String function) throws Throwable {
       
		localCode = local;
		
		try {
    	df.createDriver(browser, urlRoot, local, function);
    	sp = new BRP_Page();
	//	sp.areCategoriesDisplayed();
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
		
	}   	

	
	@Given("^the model types are shown$")
	public void the_model_types_are_shown() throws Throwable {
	
		//We select the model type
		try {
			sp.areCategoriesDisplayed(localCode.substring(0,2));
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
	

	}

	@When("^we select category: \"([^\"]*)\" and/or \"([^\"]*)\"$")
	public void we_select_model_type_and_year (String category, String modelYear) throws Throwable {

		//if (category.equals("ATV") || category.equals("SSV")) {
			sp.selectCategory(category, modelYear);	
	   // } else  {
	   //	sp.selectCategory(modelYear);	
	    //}
 	
	
	}

	@When("^we select the model \"([^\"]*)\" with index \"([^\"]*)\"$")
	public void we_select_the_model_MODEL_with_index(String modelName, String modelIndex) throws Throwable {
		
		//Select model
		
		try{
			sp.selectModel(modelName, Integer.parseInt(modelIndex));	
		} catch (Error e)  {
			verificationErrors.append(e.toString());
		}

	}

	
	@Given("^the packages are shown$")
	public void the_packages_are_shown() throws Throwable {

		// Verify if the packages are displayed
		try {
		     sp.arePackagesDisplayed();
		    } catch (Error e) {
		      verificationErrors.append(e.toString());
		    }
		
	}

	@When("^we select package \"([^\"]*)\" with index \"([^\"]*)\"$")
	public void we_select_package_PACKAGE_with_index(String packageName, String packageIndex) throws Throwable {
	   
		// Select the package
		try {
			Thread.sleep(3000);
			sp.selectPackage(packageName, Integer.parseInt(packageIndex)-1);
			sp.clickContinue("2");			
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}

        
	}


	@Given("^the colors and options are shown$")
	public void the_colors_and_options_are_shown() throws Throwable {
	
		// Verify if the colors and options are displayed
		try {
			sp.areColorsAndOptionsDisplayed();
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
         
	}

	@Given("^we select the color: \"([^\"]*)\" and the engine: \"([^\"]*)\"$")
	public void we_select_the_color_and_the_engine(String colorIndex, String engineIndex) throws Throwable {

		 // We select the color	  and engine 
		try {
		sp.selectColor(colorIndex);
		Thread.sleep(1000);
		
		sp.selectEngine(Integer.parseInt(engineIndex));
		Thread.sleep(1000);

		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
		
	    // And we continue to Accessories
		sp.clickContinue("3");
	}

	
	@Given("^the accessories are shown$")
	public void the_accessories_are_shown() throws Throwable {
        
		// Verify if the accessories are displayed

	    try {
	    	sp.areAccessoriesDisplayed();	
	    } catch (Error e) {
	      verificationErrors.append(e.toString());
	    }
 		
	}


	@Given("^we select the accessory \"([^\"]*)\" with index \"([^\"]*)\" and group index \"([^\"]*)\" and expected added number \"([^\"]*)\"$")
	public void we_select_the_accessory_with_index_and_group_index_expected_number(String accessoryId, String aIndex, String gIndex, String aAddNbr) throws Throwable {
		// Select the accessories
		
		try {
		sp.selectAccessories(accessoryId, aIndex, gIndex, aAddNbr);
     //	Thread.sleep(1000);

	    //totalPrice = sp.getPrice("Accessories");
		//Thread.sleep(1000);	 
		
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
	}

	
	@Given("^the number of added accessories is as expected: \"([^\"]*)\"$")
	public void the_number_of_added_accessories_is_as_expected(String expAddAccNbr) throws Throwable {
		
		int addAccessNbr;
		int totalPriceInt;
		
		if (Integer.parseInt(expAddAccNbr) > 0){
		addAccessNbr = sp.getAddedAccessoriesNumber();
		assertEquals(Integer.parseInt(expAddAccNbr), addAccessNbr);
		}		
		
		try {
			totalPrice = sp.getPrice("Accessories", expAddAccNbr);
						
			Thread.sleep(1000);	
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
		
	    sp.clickContinue("4");

	}
	
	@Given("^the Summary page is shown$")
	public void the_confirmation_page_is_shown() throws Throwable {
		
		// Verify if the summary is displayed	
	try {	
	   Thread.sleep(1000);
       sp.isSummaryDisplayed();
	} catch (Error e) {
		verificationErrors.append(e.toString());
	}
	}
	
	
	@When("^we select Send To Dealer$")
	public void we_select_SEND_TO_A_DEALER() throws Throwable {
	
		// Click on the button Send to Dealer
		
		try {
		sp.sendToDealer();
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
	}

	@Given("^the Send to Dealer form is shown$")
	public void the_send_to_dealer_form_is_shown() throws Throwable {
		
		// Verify if the Send to Dealer form is displayed
		Thread.sleep(1000);
		try {
		sp.isSendToDealerFormDisplayed();
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
		
	}

	@Given("^we fill in FirstName: \"([^\"]*)\", LastName: \"([^\"]*)\", EmailAddress: \"([^\"]*)\", Phone Number: \"([^\"]*)\", Address: \"([^\"]*)\" and PostalCode: \"([^\"]*)\"$")
	public void we_fill_in_FirstName_LastName_EmailAddress_Phone_Number_Address_and_PostalCode(String fName, String lName, String email, String phone, String address, String zipCode) throws Throwable {

		// We fill in the fields of the form
		
		try {
			sp.enterDataToField ("inputFirstName", fName);
			sp.enterDataToField ("inputLastName", lName);
			sp.enterDataToField ("inputEmail", email);
			sp.enterDataToField ("inputPhoneNumber", phone);
			sp.enterDataToField ("inputAddress", address);
			sp.enterDataToField ("inputPostalCode", zipCode);
		} catch (Error e){
			
			verificationErrors.append(e.toString());
		}
	    
	}
	

	

	@When("^we add Comments: \"([^\"]*)\"$")
	public void we_add_Comments(String textComment) throws Throwable {

		try {
		sp.addComments(textComment);
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
		
	}



	@When("^we submit Request$")
	public void we_submit_Request() throws Throwable {
		
		// We submit the filled out form to the Dealer
		
		try {
		sp.submitRequest();
		} catch (Error e) {
			verificationErrors.append(e.toString());
		}
 
	}


	@Then("^the final price is valid$")
	public void the_final_price_is_valid() throws Throwable {
		
        String finalPrice;
        
        finalPrice = sp.getPrice("Summary", "0");
        System.out.println("Final Price:" + finalPrice);
        System.out.println("Total Price:" + totalPrice);        
		assertEquals(finalPrice, totalPrice);
     
		  
	}

	
	@Given("^the \"([^\"]*)\" elements are displayed$")
	public void the_elements_are_displayed(String targets) throws Throwable {
	    // Validate that targets elements are displayed
		
		switch(targets.toUpperCase()) {
		case "MODELS": 	
			sp.areCategoriesDisplayed(localCode.substring(0,2));
	    break;
	    default : 
	    	System.out.println("Targets are not defined");
		} 
		
	 
	}


	@Then("^all \"([^\"]*)\" links return valid pages$")
	public void all_links_return_valid_pages(String section) throws Throwable {
		//Validate the Section links
	    sp.areLinksFunctional(section);
	}

	
	
	@When("^we subscribe to the newsletter: <SUBSCRIBE E-NEWSLETTER>$")
	public void we_subscribe_to_the_newsletter_SUBSCRIBE_E_NEWSLETTER() throws Throwable {

		//driver.findElement(By.xpath("//div[@id='sendToDealerModalContainer']/div[4]/div/div/div/div/div/div/input")).click();
		  throw new PendingException();
	}

	@When("^we subscribe to the promotion: <SUBSCRIBE PROMOTION>$")
	public void we_subscribe_to_the_promotion_SUBSCRIBE_PROMOTION() throws Throwable {

		//driver.findElement(By.xpath("//div[@id='sendToDealerModalContainer']/div[4]/div/div/div/div/div[2]/div/input")).click();
		  throw new PendingException();	
	}	
	
	 @After
		public void tearDown() {
		System.out.println("Inside After");
		//df.teardown();
		//driver.quit();
		}
		

}
