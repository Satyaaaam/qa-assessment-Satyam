import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { NavigationPage } from '../utils/NavigationPage';
import { testData } from '../utils/testData';

test('Navigate to GoTrade Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const navigation = new NavigationPage(page);

  // Step 1: Go to website
  await loginPage.goto();

  // Step 2: Log in
  await loginPage.login(testData.user.email, testData.user.password);

  // Step 3: Handle modal if present
  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  // Step 4: Open Trading dropdown and navigate
  await navigation.openTradingDropdown();
  await navigation.navigateTo('GoTrade');

  // Step 5: Verify navigation
  await navigation.verifyNavigation('GoTrade Dashboard');
});
