import { WebDriver } from "selenium-webdriver";
import { CreateDriverFactory } from "../../main/config/driverFactory";
import { HomePage } from "../../main/pages/home.page";
import { SignupPage } from "../../main/pages/signup.page";



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