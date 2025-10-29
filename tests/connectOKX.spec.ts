import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { VenueAccountPage } from '../utils/VenueAccountPage';
import { testData } from '../utils/testData';

test('Connect OKX Account (with passphrase)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const venuePage = new VenueAccountPage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  await venuePage.clickConnectAccount();
  await venuePage.selectVenue('OKX');
  await venuePage.fillAccountDetails({
    accountName: 'OKX Trading Account',
    apiKey: 'okx_api_key_123',
    secretKey: 'okx_secret_456',
    passphrase: 'okx_passphrase_789',
  });
  await venuePage.enableTestMode();
  await venuePage.addAccount();
  await venuePage.verifyAccountAdded('OKX Trading Account');
});
