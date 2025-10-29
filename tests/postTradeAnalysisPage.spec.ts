import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { NavigationPage } from '../utils/NavigationPage';
import { testData } from '../utils/testData';

test('Navigate to Post Trade Analysis Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const navigation = new NavigationPage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  await navigation.openTradingDropdown();
  await navigation.navigateTo('Post Trade Analysis');

  await navigation.verifyNavigation('Post Trade Analysis');
});
