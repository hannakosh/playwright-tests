import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { goto } from '../src/pages/navigatable';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  await goto(loginPage);
  await loginPage.login(`${process.env.LOGIN_PASSWORD}`);
  await expect(page.locator('.v-btn__content').getByText('Test user')).toBeVisible();
  
});

test('Wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('incorrect');
  await expect(loginPage.wrongCredentialsMessage).toBeVisible();
});