import { test, expect } from '../src/pages/fixtures/base';
import { LoginPage } from '../src/pages/login.page';
import { DriversPage } from '../src/pages/drivers.page';
import { Steps } from '../src/pages/steps';
import { goto } from '../src/pages/navigatable';



test.describe('Negative test', () => {
  
  test('Wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await goto(loginPage);
    await loginPage.login('incorrect');
    await expect(loginPage.wrongCredentialsMessage).toBeVisible();
  });
});


test.describe('Inner tests', () => {
  test.beforeEach(async ({ steps, loginPage, driversPage }) => {
    await steps.login(loginPage, driversPage);
    
  })

  // test('Login test', async ({ page }) => {
  //   await expect(page.locator('.v-btn__content').getByText('Test user')).toBeVisible();  
  // });

  test('Drivers page test', async () => {
    console.log('');
  });
});