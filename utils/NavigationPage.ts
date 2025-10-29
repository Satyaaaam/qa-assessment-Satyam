import { Page, expect } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openTradingDropdown() {
    const tradingDropdown = this.page.locator('text=Trading');
    await expect(tradingDropdown).toBeVisible({ timeout: 10000 });
    await tradingDropdown.click();
  }

  async navigateTo(option: string) {
    const menuItem = this.page.locator(`text=${option}`);
    await expect(menuItem).toBeVisible({ timeout: 10000 });
    await menuItem.click();
  }

  async verifyNavigation(expectedText: string) {
    const pageContent = this.page.locator(`text=${expectedText}`);
    await expect(pageContent).toBeVisible({ timeout: 15000 });
  }
}
