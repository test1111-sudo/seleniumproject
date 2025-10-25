import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly header: Locator;
  readonly logo: Locator;
  readonly signupLoginBtn: Locator;
  readonly productsBtn: Locator;
  readonly cartBtn: Locator;
  readonly contactBtn: Locator;
  readonly womenSection: Locator;
  readonly menSection: Locator;
  readonly kidsSection: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.locator('#header');
    this.logo = page.locator('div.logo img');
    this.signupLoginBtn = page.getByRole('link', { name: 'Signup / Login' });
    this.productsBtn = page.getByRole('link', { name: /products/i });
    this.cartBtn = page.getByRole('link', { name: /cart/i });
    this.contactBtn = page.getByRole('link', { name: /contact/i });
    this.womenSection = page.getByRole('link', { name: /women/i });
    this.menSection = page.getByRole('link', { name: /men/i });
    this.kidsSection = page.getByRole('link', { name: /kids/i });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async openSignup(): Promise<void> {
    await this.signupLoginBtn.click();
  }
}
