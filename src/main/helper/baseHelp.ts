import { By, WebElement, WebDriver } from "selenium-webdriver";

export class BaseHelp {
protected driver: WebDriver;

constructor(driver: WebDriver) {
this.driver = driver;
}

async findElement(selector: By): Promise<WebElement> {
const element = await this.driver.findElement(selector);
return element;
}
}