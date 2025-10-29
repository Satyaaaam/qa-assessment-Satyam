import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { LogoutPage } from '../utils/LogoutPage';
import { testData } from '../utils/testData';

test('User should be able to log out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  // Step 1: Go to the website
  await loginPage.goto();

  // Step 2: Log in using valid credentials
  await loginPage.login(testData.user.email, testData.user.password);

  // Step 3: Handle the modal and click "Get Started"
  await loginPage.clickGetStartedModal();

  // Step 4: Verify login success (for example: not on base URL)
  await expect(page).not.toHaveURL(testData.urls.base);

  // Step 5: Perform logout
  await logoutPage.logout();

  // Step 6: Verify redirect back to login
  await expect(page).toHaveURL(testData.urls.base);
});
