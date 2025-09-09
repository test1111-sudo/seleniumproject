import { WebDriver } from "selenium-webdriver";
import { SignupPage } from "../../pages/signup.page";
import { HomePage } from "../../pages/home.page";
import { CreateDriverFactory } from "../../config/driverFactory";

export class BaseTest {
driver!: WebDriver;
homePage!: HomePage;
signUpPage!: SignupPage;

async setup(): Promise<void> {
const factory = new CreateDriverFactory();
this.driver = await factory.setUp();
this.homePage = new HomePage(this.driver);
this.signUpPage = new SignupPage(this.driver);
}

async teardown(): Promise<void> {
if (this.driver) {
await this.driver.quit();
}
}
}