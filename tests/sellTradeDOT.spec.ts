import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { GoTradePage } from '../utils/GoTradePage';
import { testData } from '../utils/testData';

test('Sell DOT/USDT', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const tradePage = new GoTradePage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  await tradePage.gotoGoTrade();
  await tradePage.selectSymbol('DOT/USDT');
  await tradePage.selectSell();
  await tradePage.enterQuantity('10');
  await tradePage.setDuration('1h');
  await tradePage.clickTrade();
  await tradePage.verifyTradeSuccess();
});
