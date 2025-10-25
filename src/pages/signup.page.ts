import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class SignupPage extends BasePage {
  readonly loginHeader: Locator;
  readonly signupHeader: Locator;
  readonly signinEmailField: Locator;
  readonly signinPasswordField: Locator;
  readonly signupNameField: Locator;
  readonly signupEmailField: Locator;
  readonly loginBtn: Locator;
  readonly signupBtn: Locator;
  readonly fillOutFormHeader: Locator;
  readonly titleRadioMr: Locator;
  readonly titleRadioMrs: Locator;
  readonly fillOutFormNameField: Locator;
  readonly fillOutFormEmailField: Locator;
  readonly passwordField: Locator;
  readonly dateOfBirthField: Locator;
  readonly monthOfBirthField: Locator;
  readonly yearOfBirthField: Locator;
  readonly newsletterCheckbox: Locator;
  readonly offersCheckbox: Locator;
  readonly addressFirstNameField: Locator;
  readonly addressLastNameField: Locator;
  readonly addressCompanyField: Locator;
  readonly addressAddressField: Locator;
  readonly addressAddress2Field: Locator;
  readonly addressCountryField: Locator;
  readonly addressStateField: Locator;
  readonly addressCityField: Locator;
  readonly addressZipcodeField: Locator;
  readonly addressMobileNumberField: Locator;
  readonly createAccountBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.loginHeader = page.locator("//h2[contains(text(),'Login to your account')]");
    this.signupHeader = page.locator("//h2[contains(text(),'New User Signup!')]");
    this.signinEmailField = page.locator("input[data-qa='login-email']");
    this.signinPasswordField = page.locator("input[data-qa='login-password']");
    this.signupNameField = page.locator("input[data-qa='signup-name']");
    this.signupEmailField = page.locator("input[data-qa='signup-email']");
    this.loginBtn = page.locator("button[data-qa='login-button']");
    this.signupBtn = page.locator("button[data-qa='signup-button']");
    this.fillOutFormHeader = page.locator("//b[contains(text(),'Enter Account Information')]");
    this.titleRadioMr = page.locator('#id_gender1');
    this.titleRadioMrs = page.locator('#id_gender2');
    this.fillOutFormNameField = page.locator("input[data-qa='name']");
    this.fillOutFormEmailField = page.locator("input[data-qa='email']");
    this.passwordField = page.locator("input[data-qa='password']");
    this.dateOfBirthField = page.locator("select[data-qa='days']");
    this.monthOfBirthField = page.locator("select[data-qa='months']");
    this.yearOfBirthField = page.locator("select[data-qa='years']");
    this.newsletterCheckbox = page.locator('#newsletter');
    this.offersCheckbox = page.locator('#optin');
    this.addressFirstNameField = page.locator("input[data-qa='first_name']");
    this.addressLastNameField = page.locator("input[data-qa='last_name']");
    this.addressCompanyField = page.locator("input[data-qa='company']");
    this.addressAddressField = page.locator("input[data-qa='address']");
    this.addressAddress2Field = page.locator("input[data-qa='address2']");
    this.addressCountryField = page.locator("select[data-qa='country']");
    this.addressStateField = page.locator("input[data-qa='state']");
    this.addressCityField = page.locator("input[data-qa='city']");
    this.addressZipcodeField = page.locator("input[data-qa='zipcode']");
    this.addressMobileNumberField = page.locator("input[data-qa='mobile']");
    this.createAccountBtn = page.locator("button[data-qa='create-account']");
  }

  async startSignup(name: string, email: string): Promise<void> {
    await this.signupNameField.fill(name);
    await this.signupEmailField.fill(email);
    await this.signupBtn.click();
  }

  async selectDateOfBirth(day: string, month: string, year: string): Promise<void> {
    await this.dateOfBirthField.selectOption(day);
    await this.monthOfBirthField.selectOption({ label: month });
    await this.yearOfBirthField.selectOption(year);
  }
}
