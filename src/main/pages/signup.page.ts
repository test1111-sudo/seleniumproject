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

fillOutFormHeader = By.xpath("//b[contains(text(),'Enter Account Information')]");
titleRadioMr = By.css("#id_gender1");
titleRadioMrs = By.css("#id_gender2");
fillOutFormNameField = By.css("input[data-qa='name']");
fillOutFormEmailField = By.css("input[data-qa='email']");
passwordField = By.css("input[data-qa='password']");
dateOfBirthField = By.css("input[data-qa='days']");
monthOfBirthField = By.css("input[data-qa='months']");
yearOfBirthField = By.css("input[data-qa='years']");
newsletterCheckbox = By.css("input[data-qa='newsletter']");
offersCheckbox = By.css("input[data-qa='optin']");

addressInformation = By.xpath("//b[contains(text(),'ADDRESS INFORMATION')]");
addressFirstNameField = By.css("input[data-qa='first_name']");
addressLastNameField = By.css("input[data-qa='last_name']");
addressCompanyField = By.css("input[data-qa='company']");
addressAddressField = By.css("input[data-qa='address']");
addressAddress2Field = By.css("input[data-qa='address2']");
addressCountryField = By.css("select[data-qa='country']");
addressStateField = By.css("input[data-qa='state']");
addressCityField = By.css("input[data-qa='city']");
addressZipcodeField = By.css("input[data-qa='zipcode']");
addressMobileNumberField = By.css("input[data-qa='mobile']");

createAccountBtn = By.css("button[data-qa='create-account']");
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