import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { testData } from '../utils/testData';

test('User should be able to log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Step 1: Go to login page
  await loginPage.goto();

  // Step 2: Enter credentials and sign in
  await loginPage.login(testData.user.email, testData.user.password);

  // Step 3: Assertion - verify login success
  await expect(page).not.toHaveURL(testData.urls.base);
});
