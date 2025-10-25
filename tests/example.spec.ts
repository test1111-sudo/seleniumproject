import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { SignupPage } from '../src/pages/signup.page';

test.describe('Registration suite', () => {
  test('verify elements are visible on home page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(homePage.header).toBeVisible();
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.productsBtn).toBeVisible();
    await expect(homePage.cartBtn).toBeVisible();
    await expect(homePage.contactBtn).toBeVisible();
    await expect(homePage.womenSection).toBeVisible();
    await expect(homePage.menSection).toBeVisible();
    await expect(homePage.kidsSection).toBeVisible();
  });

  test('test case 1', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.goto();
    await homePage.openSignup();

    await expect(page).toHaveURL(/\/login$/);
    await expect(signupPage.signupHeader).toBeVisible();

    const uniqueEmail = `fml-${Date.now()}@example.com`;
    await signupPage.startSignup('FML', uniqueEmail);

    await expect(page).toHaveURL(/\/signup$/);
    await expect(signupPage.fillOutFormHeader).toBeVisible();
    await expect(signupPage.titleRadioMr).toBeVisible();
    await expect(signupPage.titleRadioMrs).toBeVisible();

    await signupPage.titleRadioMrs.check();

    await expect(signupPage.fillOutFormNameField).toBeVisible();
    await expect(signupPage.fillOutFormEmailField).toBeVisible();

    await signupPage.passwordField.fill('Password123');
    await signupPage.selectDateOfBirth('17', 'May', '2000');

    await expect(signupPage.newsletterCheckbox).toBeVisible();
    await signupPage.newsletterCheckbox.check();
    await expect(signupPage.offersCheckbox).toBeVisible();
    await signupPage.offersCheckbox.check();
  });
});
