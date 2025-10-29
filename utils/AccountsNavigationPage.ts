import { Page, expect } from '@playwright/test';

export class AccountsNavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openAccountsDropdown() {
    const accountsDropdown = this.page.locator('text=Accounts');
    await expect(accountsDropdown).toBeVisible({ timeout: 10000 });
    await accountsDropdown.click();
  }

  async navigateTo(option: string) {
    const menuItem = this.page.locator(`text=${option}`);
    await expect(menuItem).toBeVisible({ timeout: 10000 });
    await menuItem.click();
  }

  async verifyNavigation(expectedText: string) {
    const element = this.page.locator(`text=${expectedText}`);
    await expect(element).toBeVisible({ timeout: 15000 });
  }
}
