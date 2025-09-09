import { By, until } from "selenium-webdriver";
import { BaseHelp } from "./baseHelp";

export class Waiters extends BaseHelp {
async setImplicitWait(timeout: number): Promise<void> {
await this.driver.manage().setTimeouts({ implicit: timeout });
}

async waitForElementVisible(selector: By, timeout = 5000): Promise<void> {
const element = await this.driver.wait(until.elementLocated(selector), timeout);
await this.driver.wait(until.elementIsVisible(element), timeout);
}
}