import { By, WebElement, error, until } from "selenium-webdriver";
import { BaseHelp } from "./baseHelp";

export class Actions extends BaseHelp {
    private readonly defaultTimeout = 5000;

    private async waitForVisibleElement(selector: By): Promise<WebElement> {
        const element = await this.driver.wait(
            until.elementLocated(selector),
            this.defaultTimeout
        );
        await this.driver.wait(until.elementIsVisible(element), this.defaultTimeout);
        await this.driver.wait(until.elementIsEnabled(element), this.defaultTimeout);
        return element;
    }

    private async scrollIntoView(element: WebElement): Promise<void> {
        await this.driver.executeScript(
            "arguments[0].scrollIntoView({ block: 'center', inline: 'nearest' });",
            element
        );
    }

    private async clickWithFallback(element: WebElement): Promise<void> {
        await this.scrollIntoView(element);
        try {
            await element.click();
        } catch (err) {
            if (err instanceof error.ElementClickInterceptedError) {
                await this.driver.sleep(250);
                await this.driver.executeScript("arguments[0].click();", element);
            } else {
                throw err;
            }
        }
    }

    async clickOnElement(selector: By): Promise<void> {
        const element = await this.waitForVisibleElement(selector);
        await this.clickWithFallback(element);
    }

    async setValueInField(selector: By, text: string): Promise<void> {
        const element = await this.waitForVisibleElement(selector);
        await element.clear();
        await element.sendKeys(text);
    }

    async navigateToPage(url: string): Promise<void> {
        await this.driver.get(url);
    }

    async checkCheckbox(selector: By): Promise<void> {
        const element = await this.waitForVisibleElement(selector);
        const isSelected = await element.isSelected();
        if (!isSelected) {
            await this.clickWithFallback(element);
        }
    }

    async selectDropdownByValue(selector: By, value: string): Promise<void> {
        const element = await this.waitForVisibleElement(selector);
        await element.sendKeys(value);
    }
}
