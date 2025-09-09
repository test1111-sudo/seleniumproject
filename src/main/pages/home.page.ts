import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class HomePage extends BasePage {
header = By.id("header");
logo = By.css("div.logo img");

signupLoginBtn = By.linkText("Signup / Login");
productsBtn = By.partialLinkText("Products");
cartBtn = By.partialLinkText("Cart");
contactBtn = By.partialLinkText("Contact");
womenSection = By.xpath("//a[contains(., 'Women')]");
menSection = By.xpath("//a[contains(., 'Men')]");
kidsSection = By.xpath("//a[normalize-space()='Kids']");

constructor(driver: import("selenium-webdriver").WebDriver) {
super(driver);
}

// example convenience method
async goToSignup(): Promise<void> {
await this.actions.navigateToPage("https://automationexercise.com/");
await this.waiters.waitForElementVisible(this.signupLoginBtn);
await this.actions.clickOnElement(this.signupLoginBtn);
}
}