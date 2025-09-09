import { Actions } from "../helper/actions";
import { Assertions } from "../helper/assertions";
import { Waiters } from "../helper/waiters";
import { WebDriver } from "selenium-webdriver";

export class BasePage {
public actions: Actions;
public assertions: Assertions;
public waiters: Waiters;

constructor(protected driver: WebDriver) {
this.actions = new Actions(driver);
this.assertions = new Assertions(driver);
this.waiters = new Waiters(driver);
}
}