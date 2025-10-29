import { Page, expect } from '@playwright/test';

export class VenueAccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickConnectAccount() {
    const connectBtn = this.page.locator('button:has-text("Connect Account")');
    await expect(connectBtn).toBeVisible({ timeout: 10000 });
    await connectBtn.click();
  }

  async selectVenue(venueName: string) {
    const venueOption = this.page.locator(`text=${venueName}`);
    await expect(venueOption).toBeVisible({ timeout: 10000 });
    await venueOption.click();
  }

  async fillAccountDetails({ accountName, apiKey, secretKey, passphrase }: any) {
    await this.page.fill('input[name="accountName"]', accountName);
    await this.page.fill('input[name="apiKey"]', apiKey);
    await this.page.fill('input[name="secretKey"]', secretKey);
    if (passphrase) {
      await this.page.fill('input[name="passphrase"]', passphrase);
    }
  }

  async enableTestMode() {
    const testModeToggle = this.page.locator('input[type="checkbox"][name="testMode"]');
    if (!(await testModeToggle.isChecked())) {
      await testModeToggle.check();
    }
  }

  async addAccount() {
    const addButton = this.page.locator('button:has-text("Add Account")');
    await expect(addButton).toBeVisible();
    await addButton.click();
  }

  async verifyAccountAdded(accountName: string) {
    const accountLocator = this.page.locator(`text=${accountName}`);
    await expect(accountLocator).toBeVisible({ timeout: 10000 });
  }
}
