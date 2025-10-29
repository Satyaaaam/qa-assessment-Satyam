import { Page, expect } from '@playwright/test';

export class GoTradePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoGoTrade() {
    await this.page.locator('text=Trading').click();
    await this.page.locator('text=GoTrade').click();
    await expect(this.page).toHaveURL(/gotrade/);
  }

  async selectSymbol(symbol: string) {
    const symbolDropdown = this.page.locator('select#symbol'); // adjust selector if needed
    await expect(symbolDropdown).toBeVisible();
    await symbolDropdown.selectOption({ label: symbol });
  }

  async selectSell() {
    const sellButton = this.page.locator('button:has-text("Sell")');
    await expect(sellButton).toBeVisible();
    await sellButton.click();
  }

  async enterQuantity(qty: string) {
    const qtyInput = this.page.locator('input[name="quantity"]');
    await expect(qtyInput).toBeVisible();
    await qtyInput.fill(qty);
  }

  async setDuration(duration: string) {
    const durationDropdown = this.page.locator('select#duration');
    await expect(durationDropdown).toBeVisible();
    await durationDropdown.selectOption({ label: duration });
  }

  async clickTrade() {
    const tradeButton = this.page.locator('button:has-text("Trade")');
    await expect(tradeButton).toBeVisible();
    await tradeButton.click();
  }

  async verifyTradeSuccess() {
    const successMsg = this.page.locator('text=Order placed successfully');
    await expect(successMsg).toBeVisible({ timeout: 10000 });
  }
}
