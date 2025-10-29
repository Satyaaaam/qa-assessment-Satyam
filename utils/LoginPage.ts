import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput;
  readonly passwordInput;
  readonly signInButton;
  readonly getStartedButton;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"], input[name="email"]');
    this.passwordInput = page.locator('input[type="password"], input[name="password"]');
    this.signInButton = page.locator('button:has-text("Sign In"), button:has-text("Login")');
    this.getStartedButton = page.locator('button:has-text("Get Started")');
  }

  async goto() {
    await this.page.goto('http://test1.gotrade.goquant.io/');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickGetStartedModal() {
    // Wait for modal to appear (max 5s)
    const modalVisible = await this.getStartedButton.isVisible({ timeout: 5000 }).catch(() => false);

    if (modalVisible) {
      console.log('✅ Modal detected — clicking "Get Started"...');
      await this.getStartedButton.click();
      await this.page.waitForLoadState('networkidle');
    } else {
      console.log('ℹ️ No modal appeared, continuing...');
    }
  }
}
