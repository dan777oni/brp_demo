package web.pages;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utils.DriverFactory;

public class BRP_Page extends DriverFactory {
	
	/**
	* All locators will be mentioned here
	*
	* For this example i am not using properties file for
	reading locators
	*/
	
	String category="";
	String mYear;
	By modelTitles = By.className("model-title");
	By categoryATV_En = By.xpath("//*[@id='category-atv']");
	By categoryATV_Fr = By.xpath("//*[@id='category-vtt']");
	By catSpyder1_En = By.xpath("//*[@id='category-2016-models']");
	By catSpyder2_En = By.xpath("//*[@id='category-2017-models']");
	By modelTypeATV_En = By.xpath("//a[contains(text(),'ATV')])[5]");
	By modelTypeSSV_En = By.xpath("//a[contains(text(),'SIDE-BY-SIDE')]");
	By packagesLocator = By.xpath("//*[@id='lMenuPackage']");
	By continueButton = By.xpath("//div[@id='bottom-menu']/div/div[2]/div/div/a/span/span");
	//By continueButton = By.xpath("//div[@id='BYOHeader']/div/div[2]/div[2]/ul/li/a/span");
	String optionsLocator = "//div[@id='mainCrumb']/ul/li[$]/a/span[2]";
	By colorsOptionsLocator = By.xpath("//*[@id='lMenuColorsOptions']"); 
	List<WebElement> colors = null;
	List<String> colorNames = null;
	public String colorsOptionsText = "SELECT COLORS & OPTIONS";
	By accessoriesLocator = By.id("lMenuAccessoryMenu");
	By accessoriesCounter = By.className("title-counter");
	//By accessoriesCounter = By.cssSelector("div.title-counter");
	By summaryLocator = By.id("summary-content");
    By sendToDealerBtnLocator = By.className("cta-sentodealer");
    By sendToDealerFormLocator = By.id("sendToDealerForm");
    By commentsLocator = By.xpath("//div[@id='accordionComments']/div/div/a/span");
    By submitRequestBtnLocator = By.xpath("//div[@id='sendToDealerModalContainer']/div[5]/div[2]/div/div/span/span");

    
    String aCounterValueInit;
    String aCounterValueUpdated;
	int counterValueExpInt;
   	String counterValueExp;
   	static String pageLoadStatus = null;
   	private static JavascriptExecutor js;
  
    
	By errorMessage = By.xpath("//div[@id='js-flash-container']/div/div");
	
	/**
	* All functions related to behavior of the page elements
	*/
	public void areCategoriesDisplayed(String language) {
		
	//	By categoryLocator = null;
			
	//	switch(category){
	//	case "ATV": 
	//		if (language.equals("fr")){
	//		  categoryLocator = categoryATV_Fr;
	//		} else categoryLocator = categoryATV_En;
	//	break;
	//	case "Spyder": 
	//		if (language.equals("fr")){
	//			  categoryLocator = catSpyder1_En;
	//			} else categoryLocator = catSpyder1_En;
	//	break;
	//	default: categoryLocator = categoryATV_En;		
	//	}
		
		waitVar.until(ExpectedConditions.presenceOfElementLocated (modelTitles));
		driver.findElement(modelTitles).isDisplayed();
		
	}
	
	public void selectCategory(String categoryId, String modelYear) {

		int cIndex=0;
		
		category = categoryId;
		mYear = modelYear;
		
		switch(categoryId) {
		case "ATV": 
			   cIndex = 1;
			break;
		case "SSV":
               cIndex = 0;
			break;
		case "Spyder":
			if (mYear.equals("2016")){
				   cIndex = 1; } else {
					   cIndex = 0;
				   }
			break;
		case "Sea-Doo":
            cIndex = 0;
		case "Ski-Doo":
            cIndex = 0;
			break;	
		default: System.out.println("Please specify the category");	
		}
		
		
		List<WebElement> categories = driver.findElements(By.className("tab"));

		Actions actions = new Actions(driver);

		//System.out.println("Available Categories:");
		
		//for (WebElement category : categories) {
			
		//	System.out.println(category.getText());

		//}
	
		if (categories.size()>0) {
		
		System.out.println("Selected Category:" + categories.get(cIndex).getText());
		actions.moveToElement(categories.get(cIndex)).click().perform();
		
		}
}
	
	public void selectModel(String modelName, int mIndex) {
		
		// Selection of the model to test
		
		    mIndex = mIndex - 1;
		
		    List<WebElement> models = driver.findElements(By.className("model-link"));
			
			Actions actions = new Actions(driver);
			
			//System.out.println("Available Models :");
           
            models.removeIf(model -> model.getText().equals(null) || model.getText().equals(""));
            
			//for (WebElement model : models) {
                
			//	System.out.println(model.getText());

			//}
		
			System.out.println("Selected model:" + models.get(mIndex).getText());
						
			actions.moveToElement(models.get(mIndex)).click().perform();
		    	

	}
	
	
	public void arePackagesDisplayed() {
		
		waitVar.until(ExpectedConditions.presenceOfElementLocated (packagesLocator));
		driver.findElement(packagesLocator).isDisplayed();
		
	}
	
	
	public void selectPackage (String pName, int pIndex) {
		
		//Selection of the package
		
		waitVar = new WebDriverWait(driver,200);	
		//pIndex = pIndex-1;

		List<WebElement> packageIds = driver.findElements(By.className("radio"));
		
		Actions actions = new Actions(driver);

		for (WebElement packageId : packageIds) {
        
			System.out.println(packageId.getText());

		}
		
	//	System.out.println("Selected package: " + pIndex + " - " + packageIds.get(pIndex).getText());
		waitVar.until(ExpectedConditions.elementToBeClickable(packageIds.get(pIndex)));
		
		
		if (pIndex >= 6) {
			
			JavascriptExecutor jse = (JavascriptExecutor)driver;
			jse.executeAsyncScript(
				       "window.setTimeout(arguments[arguments.length - 1], 500);");
			jse.executeScript("scroll(0, 300);");

		}
		
		if (packageIds.get(pIndex).isSelected()==false){

			//waitVar.until(ExpectedConditions.elementToBeClickable(packageIds.get(pIndex)));
			//waitVar.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.className("radio")));
			//waitVar.until(ExpectedConditions.jsReturnsValue("return document.readyState"));
			//waitForPageToLoad();
		//	Thread.sleep(3000);
			actions.moveToElement(packageIds.get(pIndex)).click().perform();
			System.out.println("Selected package: " + pIndex + " - " + packageIds.get(pIndex).getText());
			//waitVar.until(ExpectedConditions.elementToBeSelected(packageIds.get(pIndex)));
			
	    }
	
		
	 // Creating the list of Available colors	
		
		colors = driver.findElements(By.className("colorName"));
		colors.removeIf(color -> color.getText().equals(null) || color.getText().equals(""));
		
		colorNames = new ArrayList<String>();
		
		//System.out.println("Available colors :");
		
		for (WebElement color : colors) {
			
		//	System.out.println(color.getText());
			colorNames.add(color.getText());
			
		}

 	}
	
	 public static void waitForPageToLoad() {
		    do {
		      js = (JavascriptExecutor) driver;
		      pageLoadStatus = (String)js.executeScript("return document.readyState");
		      System.out.print(".");
		    } while ( !pageLoadStatus.equals("complete") );
		    System.out.println();
		    System.out.println("Page Loaded.");
		  }


	public void areColorsAndOptionsDisplayed() {
		
		waitVar.until(ExpectedConditions.presenceOfElementLocated (colorsOptionsLocator));
		driver.findElement(colorsOptionsLocator).isDisplayed();
		
		assertEquals(colorsOptionsText, driver.findElement(colorsOptionsLocator).getText());
		
	}
	

	public void selectColor (String cIndex) {
		
		//Selection of color
		
		  int cIndexInt = Integer.parseInt(cIndex);
		
		  System.out.println("Available colors :");
			
			for (int i=0; i<colorNames.size(); i++) {
				
				System.out.println(colorNames.get(i));

			}
	  
		
		System.out.println("Selected color:" + colorNames.get(cIndexInt-1));
		
		  String elementPath="";
		  
		  if (cIndex.equals("1")) {
			  
			  elementPath = "//span/img";
			  
		  } else {
			  
			  elementPath = "//span[" + cIndex + "]/img";
		  }
	       
			waitVar.until(ExpectedConditions.elementToBeClickable(By.xpath(elementPath)));
			
			if (driver.findElement(By.xpath(elementPath)).isSelected()==false) {
				driver.findElement(By.xpath(elementPath)).click();		
			}
		
	}
	
	public void selectEngine (int eIndex) {

		eIndex = eIndex-1;
		
		
		List<WebElement> engines = driver.findElements(By.className("radio"));    

		Actions actions = new Actions(driver);
		System.out.println("Available engines :");
		
		for (WebElement engine : engines) {
			
			System.out.println(engine.getText());

		}
	
		
		System.out.println("Selected engines:" + engines.get(eIndex).getText());
		
		
		if (engines.get(eIndex).isSelected()==false){
			
			actions.moveToElement(engines.get(eIndex)).click().perform();
	    	
	    }
		
	}
	
	

	public void areAccessoriesDisplayed() {
	
				
		waitVar.until(ExpectedConditions.presenceOfElementLocated (accessoriesLocator));
		driver.findElement(accessoriesLocator).isDisplayed();	
		
		 //   for (int second = 0;; second++) {
    	
		 //   	if (second >= 60) fail("timeout");
		 //   	try { if ("SELECT ACCESSORIES".equals(driver.findElement(By.cssSelector("span.step-name")).getText())) break; } catch (Exception e) {}
	  	
		    	//Thread.sleep(1000);
		 //   }

	}
	
    public void selectAccessories (String aName, String aIndex, String gIndex, String addNbr) {
    	
	    // Select the accessory
    	
    	aCounterValueInit = driver.findElement(accessoriesCounter).getText();
    	
    	int aIndexInt = Integer.parseInt(aIndex);
    	int gIndexInt = Integer.parseInt(gIndex);
    	int addNbrInt = Integer.parseInt(addNbr);

	    List<WebElement> accessories = driver.findElements(By.className("accessory"));
    	// List<WebElement> accessories = driver.findElements(By.id("accordion-accessories"));
    	 
 			Actions actions = new Actions(driver);

 			accessories.removeIf(accessory -> accessory.getText()==null || accessory.getText().contains("INCLUDED") || accessory.getText().equals(""));
 			
 			
 		//	System.out.println("Available accessories :");

		//	for (WebElement accessory : accessories) {
				
		//		System.out.println(accessory.getText());
				
		//	}

			
		    List<WebElement> accGroups = driver.findElements(By.className("accordion-heading"));
		    
	 			Actions actionsAG = new Actions(driver);
	 			
	 					
	 	//		System.out.println("Available accessories groups :");

		//		for (WebElement accGroup : accGroups) {
					
		//			System.out.println(accGroup.getText());
					
		//		}

			
				
			  	System.out.println("Selected Accessory: " + accessories.get(aIndexInt).getText());
			  	System.out.println("Selected Accessories Group: " + accGroups.get(gIndexInt).getText());
			    	
		    	
		    actionsAG.moveToElement(accGroups.get(gIndexInt)).click().perform();
		    waitVar.until(ExpectedConditions.elementToBeClickable(accessories.get(aIndexInt)));
			actions.moveToElement(accessories.get(aIndexInt)).click().perform();
    
	    waitVar.until(ExpectedConditions.elementToBeClickable(By.cssSelector("span.addaccessory")));
	    driver.findElement(By.cssSelector("span.addaccessory")).click();
	    
	    
	    if (addNbrInt>1) {
	       waitVar.until(ExpectedConditions.elementToBeClickable(By.className("addedAccessory")));
	       driver.findElement(By.className("continue")).click();
	    } 
	    
	    
	  //      actionsAG.moveToElement(accGroups.get(gIndexInt)).click().perform();

   	
    }

    
    public String getPrice(String pageId, String expAddAccessNbr) {
    	
    	String totalPrice = "";
  	    By priceLocator=null; 
   	       	    
   // 	System.out.println("Counter: " + aCounterValue);
  //  	buildPrice = By.className("price-amount");
  //   	System.out.println("Price amount(price-amount): " + driver.findElement(buildPrice).getText()); 	
     	accessoriesCounter = By.className("title-counter");

     	counterValueExpInt = Integer.parseInt(aCounterValueInit)+Integer.parseInt(expAddAccessNbr);
     	counterValueExp = Integer.toString(counterValueExpInt);
     	
    	switch (pageId) {
    	case "Accessories": 
    		waitVar.until(ExpectedConditions.textToBe(accessoriesCounter, counterValueExp));
    		priceLocator = By.className("price-amount");
    		System.out.println("The price: " + driver.findElement(priceLocator).getText());
    		totalPrice = driver.findElement(priceLocator).getText().substring(1);
    	//	System.out.println("Total price: " + totalPrice);
    		break;
    	case "Summary":
    		//priceLocator = By.cssSelector("div.total-price.span6");
    		priceLocator = By.className("amount");
    		//totalPrice = driver.findElement(priceLocator).getText().substring(2);
    		//if (category.equals("Sea-Doo")) {
    		//	totalPrice = driver.findElement(priceLocator).getText().substring(2, driver.findElement(priceLocator).getText().indexOf(",")+6);	
    		//} else {
    		totalPrice = driver.findElement(priceLocator).getText().substring(2, driver.findElement(priceLocator).getText().indexOf(",")+7);
    		//}
    	//	System.out.println("Total price: " + totalPrice);
     	    break;
     	default: 
     	    System.out.println("The price can't be found");
     	    totalPrice = "Not found";
    	}
    	
	    System.out.println("Page " + pageId + ": total Price = " + totalPrice);
    	
        //double finalPrice = Double.parseDouble(finalPriceValue);
	    
    	return totalPrice;
    }
    
    public int getAddedAccessoriesNumber() {
  	
    	int addedAccessoriesNbr;

     	accessoriesCounter = By.className("title-counter");
      //	waitVar.until(ExpectedConditions.not(ExpectedConditions.textToBe(accessoriesCounter,"0")));
      	waitVar.until(ExpectedConditions.not(ExpectedConditions.textToBe(accessoriesCounter,aCounterValueInit)));
      	
    	aCounterValueUpdated = driver.findElement(accessoriesCounter).getText();  	
    	
     	addedAccessoriesNbr = Integer.parseInt(aCounterValueUpdated) - Integer.parseInt(aCounterValueInit);
    	return addedAccessoriesNbr;
   	 	
    	
    }

	public void clickContinue (String locateIndex) {
		
	//	String element; 
		
		   //We continue to the next page
		
		//  JavascriptExecutor jse = (JavascriptExecutor)driver;
		//  jse.executeScript("scroll(0, 250);");		
	  
		  continueButton = By.xpath(optionsLocator.replace("$", locateIndex));
		  
		  waitVar.until(ExpectedConditions.elementToBeClickable(continueButton));
		  driver.findElement(continueButton).click();
			
		}
    

	
	public void isSummaryDisplayed() {

		waitVar.until(ExpectedConditions.presenceOfElementLocated (summaryLocator));
		driver.findElement(summaryLocator).isDisplayed();	
	
		
	//	waitVar = new WebDriverWait(driver,10);
	//	waitVar.until(ExpectedConditions.elementToBeClickable(By.className("cta-sentodealer")));
	//	try {

	//	      assertTrue(isElementPresent(By.linkText("EDIT BUILD")));
	//	    } catch (Error e) {
	//	      verificationErrors.append(e.toString());
	//	    }
		
	  //    assertEquals("SUMMARY", driver.findElement(By.xpath("//div[@id='contentHeader']/div/div")).getText());
	  //    System.out.println("the summary is displayed:");
	  //    System.out.println(driver.findElement(By.xpath("//div[@id='contentHeader']/div/div")).getText());


			
	}
	
	public void sendToDealer() {

		
		waitVar.until(ExpectedConditions.presenceOfElementLocated (sendToDealerBtnLocator));
		driver.findElement(sendToDealerBtnLocator).isDisplayed();
		driver.findElement(sendToDealerBtnLocator).click();
		
		//waitVar = new WebDriverWait(driver,10);
	//	waitVar.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@id='sendToDealerModalContainer']/div[5]/div[2]/div/div/span/span")));

		
	}
	

	public void isSendToDealerFormDisplayed () {
		
		waitVar.until(ExpectedConditions.presenceOfElementLocated (sendToDealerFormLocator));
		driver.findElement(sendToDealerFormLocator).isDisplayed();
		
	}
	
	public void areLinksFunctional(String section){
		
		By sectionLocator = null;
		String actualUrl;
		//String elementName;
		
		switch(section.toUpperCase()) {
		case "FOOTER": sectionLocator = By.xpath("//a[contains(@class, 'legal-navigation-item')]");
		break;
		//case "HEADER": sectionLocator = By.xpath("//*[@id='navigation-legal']");
		//break;
		default: 
			sectionLocator = null;
		}
		
	    List<WebElement> elementsInit = driver.findElements(sectionLocator);
	    
			Actions actions = new Actions(driver);
			
		System.out.println("Available links:");
		
	    int iSize = elementsInit.size();
		
			for(int i=0; i<iSize; i++){
				
				List<WebElement> elementsAct = driver.findElements(sectionLocator);
				
				waitVar.until(ExpectedConditions.elementToBeClickable(elementsAct.get(i)));	
				
				String elementName = elementsAct.get(i).getText();
				String elementHref = elementsAct.get(i).getAttribute("href");
				
				if (!elementName.equals("CORPORATE") && !elementName.equals("CAREERS")){
			
				System.out.println(elementName + ": " + elementHref);
				
			//	if (elementHref.substring(elementHref.length()-1).equals("/")) {
			//		elementHref = elementHref.replace(elementHref.substring(elementHref.length()-1), "");
			//	}
				
			//	System.out.println(elementName + ": " + elementHref);
				actualUrl = driver.getCurrentUrl();
				
				driver.findElement(By.linkText(elementName)).click();
				waitVar.until(ExpectedConditions.not(ExpectedConditions.urlToBe(actualUrl)));			
					
			//	if (elementHref.contains("brp.com")){
			//		waitVar.until(ExpectedConditions.urlContains("brp.com"));
			//		driver.get(actualUrl);
			//	} else {
			//	waitVar.until(ExpectedConditions.urlContains(elementHref));
			//	driver.navigate().back();
			//}

			//	waitVar.until(ExpectedConditions.urlContains(actualUrl));
				assertTrue(isRightPageDisplayed(elementName, elementHref, actualUrl));
				
			}	
			}
	
	}

	
	public boolean isRightPageDisplayed (String linkName, String targetUrl, String actualUrl) {
	
		//By targetLocator = null;
		
		//switch (pageAttribute.toUpperCase()){
		
		//case "MODELS": targetLocator = modelTitles;
		//break;
		//default: targetLocator = By.cssSelector("h1");
		
		//}
		
	//	waitVar.until(ExpectedConditions.presenceOfElementLocated(targetLocator));
	//	waitVar.until(ExpectedConditions.invisibilityOfElementLocated(targetLocator));
		
		System.out.println("Current url:" + driver.getCurrentUrl());
		
		if ((targetUrl.contains("brp.com") && driver.getCurrentUrl().contains("brp.com"))) {
			driver.get(actualUrl);
			waitVar.until(ExpectedConditions.urlToBe(actualUrl));
			return true;
		} else if (driver.getCurrentUrl().equals(targetUrl)) {
			driver.navigate().back();
			waitVar.until(ExpectedConditions.urlToBe(actualUrl));
			return true;
		} else return false;
				
	}
	
	
	public boolean enterDataToField (String fieldId, String data) {
		
	    try {
		      driver.findElement(By.id(fieldId));
		      driver.findElement(By.id(fieldId)).clear();
			  driver.findElement(By.id(fieldId)).sendKeys(data);
  
		      return true;
		    } catch (NoSuchElementException e) {
		      return false;
		    }
			
	}
	
	
	public void addComments (String commentsContent) {
		
		driver.findElement(commentsLocator).click();
		enterDataToField("inputComment", commentsContent);
		
	}
	
	public void submitRequest () {
		
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("scroll(0, 250);");
		
		driver.findElement(submitRequestBtnLocator).click();
		
	}
	
	
	public void verifyErrorMessage(String msg) {
	waitVar.until(ExpectedConditions.presenceOfElementLocated
	(errorMessage));
	assertEquals(msg,
	driver.findElement(errorMessage).getText());
	}
	}
