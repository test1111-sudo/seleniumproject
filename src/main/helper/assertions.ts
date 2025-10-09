import { By } from "selenium-webdriver";
import { BaseHelp } from "./baseHelp";

    export class Assertions extends BaseHelp {
    async verifyElementIsVisible(selector: By): Promise<boolean> {
    const element = await this.findElement(selector);
    return element.isDisplayed();
    }

    async verifyPageUrl(url: string): Promise<boolean> {
    const currentUrl = await this.driver.getCurrentUrl();
    return currentUrl === url;
    }
}