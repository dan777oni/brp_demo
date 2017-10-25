package options;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
		features = "src/test/java/features",
		glue={"stepDefinitions"},
		tags={"@en_ca"}
		)

public class TestRunner {

}
