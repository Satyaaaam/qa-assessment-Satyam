import { Page, expect } from '@playwright/test';

export class AdminPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Step 1: Navigate to website
  async goto() {
    await this.page.goto('http://test1.gotrade.goquant.io/');
  }

  // Step 2: Go to Admin page from the Accounts dropdown
  async navigateToAdmin() {
    await this.page.click('text=Accounts'); // open dropdown
    await this.page.click('text=Admin'); // click Admin option
    await expect(this.page).toHaveURL(/.*admin/i);
  }

  // Step 3: Delete the account
  async deleteAccount() {
    // Click delete button on Admin page
    await this.page.click('button:has-text("Delete")');

    // Wait for modal to appear
    const modal = this.page.locator('.modal-content');
    await expect(modal).toBeVisible();

    // Type 'delete' in confirmation input
    await this.page.fill('input[placeholder="Type delete to confirm"]', 'delete');

    // Click final delete button on modal
    await this.page.click('button:has-text("Delete")');

    // Wait for confirmation / success toast
    await expect(this.page.locator('text=Account deleted successfully')).toBeVisible({ timeout: 5000 });
  }
}
