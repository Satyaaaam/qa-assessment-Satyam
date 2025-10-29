import { Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  readonly profileDropdown;
  readonly signOutButton;

  constructor(page: Page) {
    this.page = page;
    // Update these selectors according to actual DOM structure
    this.profileDropdown = page.locator('[data-testid="user-dropdown"], .profile-dropdown, [aria-label="User menu"]');
    this.signOutButton = page.locator('text=Sign Out, text=Logout');
  }

  async logout() {
    await this.profileDropdown.click();
    await this.signOutButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
