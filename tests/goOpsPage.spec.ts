import { test } from '@playwright/test';
import { LoginPage } from '../utils/LoginPage';
import { AccountsNavigationPage } from '../utils/AccountsNavigationPage';
import { testData } from '../utils/testData';

test('Navigate to GoOps Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountsNav = new AccountsNavigationPage(page);

  await loginPage.goto();
  await loginPage.login(testData.user.email, testData.user.password);

  const getStartedBtn = page.locator('button:has-text("Get Started")');
  if (await getStartedBtn.isVisible().catch(() => false)) {
    await getStartedBtn.click();
  }

  await accountsNav.openAccountsDropdown();
  await accountsNav.navigateTo('GoOps');

  await accountsNav.verifyNavigation('GoOps');
});
