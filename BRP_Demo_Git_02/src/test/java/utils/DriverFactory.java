package utils;

import java.io.File;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory  {

	public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;
//	public static String baseURL = "http://store.demoqa.com/";
//	public static String baseURL = "http://54.196.13.195:4503/content/canam-offroad/";
	FirefoxOptions options = new FirefoxOptions();
	public static String baseURL = "";
	public static String functionText = "";
	
	
	/**
	* This function is to invoke Selenium Webdriver
	*
	* @throws MalformedURLException
	* @throws InterruptedException
	*/
	public void createDriver(String browser, String rootURL, String local, String function) throws MalformedURLException,
	InterruptedException {
		
		switch (browser){
		case "Firefox": 
			System.setProperty("webdriver.gecko.driver", "C:\\Program Files\\Java\\selenium-java-3.6.0\\geckodriver.exe");
			DesiredCapabilities capabilities = DesiredCapabilities.firefox();
	        capabilities.setCapability("marionette", true);
	        capabilities.setCapability("moz:firefoxOptions", options);
	        driver = new FirefoxDriver(capabilities);
	        break;
		case "Chrome":
			System.setProperty("webdriver.chrome.driver", "C:/Program Files (x86)/Google/Chrome/Application/chromedriver.exe");
			driver = new ChromeDriver();	
			break;
		case "IE":
   			File file = new File("C:\\Program Files\\Java\\IEDriverServer.exe");
  			System.setProperty("webdriver.ie.driver",file.getAbsolutePath());
  		    //driver = new InternetExplorerDriver(capabilities);
  			driver = new InternetExplorerDriver();
  			break;
  		default:
  			System.out.println("The browser is not identified");
  			break;
			
		}
 		
	    switch (function) {
		case "BYO":
		  if (local == "fr_CA") {
			  functionText = "configurez-votre-can-am";
		  }
		  else
		  {
			  functionText = "build-and-price";
		  }
		  break;
		default: 
			System.out.println("The function is not identified");
  			break;
	    }
		
		baseURL = rootURL + "/" + local + "/" + functionText + ".html";	
		
			
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
    driver.get(baseURL);
	waitVar = new WebDriverWait(driver, 15);
	}

	
	/**
	* This function is to close driver instance
	*/
	public void teardown() {
	driver.quit();
	}
}


