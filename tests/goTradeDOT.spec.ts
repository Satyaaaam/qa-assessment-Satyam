import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { GoTradePage } from '../utils/GoTradePage';
import { testData } from '../utils/testData';

test('Place trade for DOT/USDT', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const tradePage = new GoTradePage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  // Step 2: Handle modal
  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  // Step 3: Go to GoTrade page
  await tradePage.gotoGoTrade();

  // Step 4: Fill in trade details
  await tradePage.selectSymbol('DOT/USDT');
  await tradePage.enterQuantity('10');
  await tradePage.setDuration('1h');
  await tradePage.clickTrade();

  // Step 5: Verify trade success
  await tradePage.verifyTradeSuccess();
});
