import { Page, expect } from '@playwright/test';

export class GoTradeSectionsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Go to the website
  async goto() {
    await this.page.goto('http://test1.gotrade.goquant.io/');
  }

  // Navigate to GoTrade from dropdown
  async navigateToGoTrade() {
    await this.page.click('text=Trading'); 
    await this.page.click('text=GoTrade');
    await expect(this.page).toHaveURL(/gotrade/i);
  }

  // Verify Working Orders section
  async verifyWorkingOrders() {
    await this.page.click('text=Working Orders');
    const table = this.page.locator('table');
    await expect(table).toBeVisible();
  }

  // Verify Order History section
  async verifyOrderHistory() {
    await this.page.click('text=Order History');
    const table = this.page.locator('table');
    await expect(table).toBeVisible();
  }

  // Verify Open Positions section
  async verifyOpenPositions() {
    await this.page.click('text=Open Positions');
    const table = this.page.locator('table');
    await expect(table).toBeVisible();
  }

  // Verify Assets section
  async verifyAssets() {
    await this.page.click('text=Assets');
    const table = this.page.locator('table');
    await expect(table).toBeVisible();
  }
}
