import { Builder, Browser, WebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import * as chromedriver from "chromedriver";

export class CreateDriverFactory {
async setUp(): Promise<WebDriver> {
const options = new chrome.Options();

// Uncomment to run headless
// options.addArguments('--headless=new');

options.addArguments('--disable-gpu');
options.addArguments('--window-size=1920,1080');

const service = new chrome.ServiceBuilder(chromedriver.path);

const driver = await new Builder()
.forBrowser(Browser.CHROME)
.setChromeService(service)
.setChromeOptions(options)
.build();

return driver;
}
}