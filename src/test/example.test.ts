import { describe, afterEach, beforeEach, it } from "mocha";
import { expect } from "chai";
import { BaseTest } from "./base/baseTest";
import { By } from "selenium-webdriver";


describe("Registration suite", function () {
    const baseTest = new BaseTest();

beforeEach("setup browser", async function () {
    await baseTest.setup();
});

afterEach("close browser", async function () {
    await baseTest.teardown();
});

it("verify elements are visible on home page", async function () {
    await baseTest.homePage.actions.navigateToPage("https://automationexercise.com/");
    await baseTest.homePage.waiters.setImplicitWait(3000);
    const headerIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.header);
    const logoIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.logo);
    const homeBtnIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.productsBtn);
    const cartBtnIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.cartBtn);
    const contactBtnIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.contactBtn);
    const womenSectionIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.womenSection);
    const menSectionIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.menSection);
    const kidsSectionIsVisible = await baseTest.homePage.assertions.verifyElementIsVisible(baseTest.homePage.kidsSection);
    });


it("test case 1", async function () {
    await baseTest.homePage.actions.navigateToPage("https://automationexercise.com/");
    await baseTest.homePage.waiters.setImplicitWait(3000);
    await baseTest.homePage.actions.clickOnElement(baseTest.homePage.signupLoginBtn);

    await baseTest.signUpPage.assertions.verifyPageUrl("https://automationexercise.com/login")
    await baseTest.homePage.waiters.setImplicitWait(3000);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.signupHeader);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.signupNameField, "FML");
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.signupEmailField,"fml@gmail.com");
    await baseTest.signUpPage.actions.clickOnElement(baseTest.signUpPage.signupBtn);

    await baseTest.signUpPage.assertions.verifyPageUrl("https://automationexercise.com/singup");
    await baseTest.homePage.waiters.setImplicitWait(3000);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.fillOutFormHeader);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.titleRadioMr);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.titleRadioMrs);
    await baseTest.signUpPage.actions.clickOnElement(baseTest.signUpPage.titleRadioMrs)
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.fillOutFormNameField);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.fillOutFormEmailField);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.passwordField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.passwordField, "Password123");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.dateOfBirthField);
    await baseTest.signUpPage.actions.clickOnElement(baseTest.signUpPage.dateOfBirthField);
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.dateOfBirthField, "17");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.monthOfBirthField);
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.monthOfBirthField, "May");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.yearOfBirthField);
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.yearOfBirthField, "2000");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.newsletterCheckbox);
    await baseTest.signUpPage.actions.checkCheckbox(baseTest.signUpPage.newsletterCheckbox);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.offersCheckbox);
    await baseTest.signUpPage.actions.checkCheckbox(baseTest.signUpPage.offersCheckbox);
    
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressInformation);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressFirstNameField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressFirstNameField, "FML");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressLastNameField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressLastNameField, "FML");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressCompanyField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressCompanyField, "shithole");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressAddressField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressAddressField, "address 1");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressAddress2Field);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressAddress2Field, "none");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressCountryField);
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.addressCountryField, "Georgia");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressStateField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressStateField, "nostate");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressCityField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressCityField, "Tbilisi");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressZipcodeField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressZipcodeField, "0111");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.addressMobileNumberField);
    await baseTest.signUpPage.actions.setValueInField(baseTest.signUpPage.addressMobileNumberField, "+995599123456");
    await baseTest.signUpPage.actions.clickOnElement(baseTest.signUpPage.createAccountBtn);
});

});
// await baseTest.homePage.actions.clickOnElement(baseTest.homePage.signupLoginBtn);

//     const urlIsCorrect = await baseTest.signUpPage.assertions.verifyPageUrl("https://automationexercise.com/login");
//     expect(urlIsCorrect).to.be.true;

//     await baseTest.signUpPage.assertions.verifyElementIsVisible(By.xpath("//h2[text()='Login to your account']"));
