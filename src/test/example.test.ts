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
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.dateOfBirthField, "17");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.monthOfBirthField);
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.monthOfBirthField, "May");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.yearOfBirthField);
    await baseTest.signUpPage.actions.selectDropdownByValue(baseTest.signUpPage.yearOfBirthField, "2000");
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.newsletterCheckbox);
    await baseTest.signUpPage.actions.checkCheckbox(baseTest.signUpPage.newsletterCheckbox);
    await baseTest.signUpPage.assertions.verifyElementIsVisible(baseTest.signUpPage.offersCheckbox);
    await baseTest.signUpPage.actions.checkCheckbox(baseTest.signUpPage.offersCheckbox);
    

    

});

});

