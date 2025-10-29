import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { AdminPage } from '../utils/AdminPage';
import { testData } from '../utils/testData';

test('User should be able to delete an account successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  // Step 1: Go to website
  await loginPage.goto();

  // Step 2: Log in
  await loginPage.login(testData.user.email, testData.user.password);

  // Step 3: Handle modal after login (click Get Started)
  const getStartedBtn = page.locator('text=Get Started');
  if (await getStartedBtn.isVisible()) {
    await getStartedBtn.click();
  }

  // Step 4: Navigate to Admin page
  await adminPage.navigateToAdmin();

  // Step 5: Delete account
  await adminPage.deleteAccount();

  // Step 6: Verify user is logged out or redirected to login
  await expect(page).toHaveURL(testData.urls.base);
});
