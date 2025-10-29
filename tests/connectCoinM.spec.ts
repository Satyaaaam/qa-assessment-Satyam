import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { VenueAccountPage } from '../utils/VenueAccountPage';
import { testData } from '../utils/testData';

test('Connect COIN-M Account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const venuePage = new VenueAccountPage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  await venuePage.clickConnectAccount();
  await venuePage.selectVenue('COIN-M');
  await venuePage.fillAccountDetails({
    accountName: 'CoinM Account',
    apiKey: 'coinm_api_key_123',
    secretKey: 'coinm_secret_456',
  });
  await venuePage.enableTestMode();
  await venuePage.addAccount();
  await venuePage.verifyAccountAdded('CoinM Account');
});
