import { By } from "selenium-webdriver";
import { BaseHelp } from "./baseHelp";

export class Actions extends BaseHelp {
    async clickOnElement(selector: By): Promise<void> {
    const element = await this.findElement(selector);
    await element.click();
    }

    async setValueInField(selector: By, text: string): Promise<void> {
    const element = await this.findElement(selector);
    await element.clear();
    await element.sendKeys(text);
    }

    async navigateToPage(url: string): Promise<void> {
    await this.driver.get(url);
    }

    async checkCheckbox(selector: By): Promise<void> {
    const element = await this.findElement(selector);
    const isSelected = await element.isSelected();
    if (!isSelected) {
    await element.click();
        }
    }

    async selectDropdownByValue(selector: By, value: string): Promise<void> {
    const element = await this.findElement(selector);
    await element.sendKeys(value);
    }
}