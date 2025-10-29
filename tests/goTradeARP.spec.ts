import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { GoTradePage } from '../utils/GoTradePage';
import { testData } from '../utils/testData';

test('Place trade for ARP/USDT', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const tradePage = new GoTradePage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  await tradePage.gotoGoTrade();
  await tradePage.selectSymbol('ARP/USDT');
  await tradePage.enterQuantity('5');
  await tradePage.setDuration('4h');
  await tradePage.clickTrade();

  await tradePage.verifyTradeSuccess();
});
