import { describe, afterEach, beforeEach, it } from "mocha";
import { expect } from "chai";
import { BaseTest } from "./base/baseTest";
import { By } from "selenium-webdriver";


describe("experiment suite", function () {
const baseTest = new BaseTest();

beforeEach("setup browser", async function () {
await baseTest.setup();
});

afterEach("close browser", async function () {
await baseTest.teardown();
});

it("experiment testcase", async function () {
await baseTest.homePage.actions.navigateToPage("https://automationexercise.com/");
await baseTest.homePage.waiters.setImplicitWait(3000);
await baseTest.homePage.actions.clickOnElement(baseTest.homePage.signupLoginBtn);
const urlIsCorrect = await baseTest.signUpPage.assertions.verifyPageUrl("https://automationexercise.com/login");
expect(urlIsCorrect).to.be.true;
await baseTest.signUpPage.assertions.verifyElementIsVisible(By.xpath("//h2[text()='Login to your account']"));





});
});