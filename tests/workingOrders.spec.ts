import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { GoTradeSectionsPage } from '../utils/GoTradeSectionsPage';
import { testData } from '../utils/testData';

test('Verify Working Orders section is visible', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const goTradePage = new GoTradeSectionsPage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStarted = page.locator('text=Get Started');
  if (await getStarted.isVisible()) await getStarted.click();

  await goTradePage.navigateToGoTrade();
  await goTradePage.verifyWorkingOrders();
});
