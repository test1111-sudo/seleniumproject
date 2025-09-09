import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class SignupPage extends BasePage {
loginHeader = By.xpath("//h2[contains(text(),'Login to your account')]");
signupHeader = By.xpath("//h2[contains(text(),'New User Signup!')]");

signinEmailField = By.css("input[data-qa='login-email']");
signinPasswordField = By.css("input[data-qa='login-password']");
signupNameField = By.css("input[data-qa='signup-name']");
signupEmailField = By.css("input[data-qa='signup-email']");
loginBtn = By.css("button[data-qa='login-button']");
signupBtn = By.css("button[data-qa='signup-button']");

constructor(driver: import("selenium-webdriver").WebDriver) {
super(driver);
}

async fillSignupForm(name: string, email: string): Promise<void> {
await this.waiters.waitForElementVisible(this.signupNameField);
await this.actions.setValueInField(this.signupNameField, name);
await this.actions.setValueInField(this.signupEmailField, email);
}

async submitSignup(): Promise<void> {
await this.actions.clickOnElement(this.signupBtn);
}
}