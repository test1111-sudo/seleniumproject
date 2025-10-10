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

  // ✅ New Fluent Wait
  async waitForElementFluent(selector: By, timeout = 10000, pollingInterval = 500) {
    const endTime = Date.now() + timeout;

    while (Date.now() < endTime) {
      try {
        const element = await this.driver.findElement(selector);
        const isDisplayed = await element.isDisplayed();
        if (isDisplayed) {
          return element;
        }
      } catch (err) {
        // Ignore if element not yet present or visible
      }
      await new Promise((resolve) => setTimeout(resolve, pollingInterval));
    }

    throw new Error(`Element ${selector} not found after ${timeout}ms`);
  }
}
