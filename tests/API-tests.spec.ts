import { Header } from '../src/pages/components/header';
import { expect, test } from '../src/pages/fixtures/base';
import { goto } from '../src/pages/navigatable';

test.describe('API Tests', () => {    
    test.beforeEach(async ({ loginPage }) => {
        await goto(loginPage);
        await loginPage.login();
    })

    test('Verify user name is correct', async ({ api, page }) => {
        const { name } = await api.get('me');
        const header = new Header(page);
        expect(header.userName).toHaveText(name);

    })

    test('Verify number of drivers', async ({ driversPage, api }) => {
        await goto(driversPage);
        await expect(driversPage.tableRows.first()).toBeVisible();
        const rows = await driversPage.tableRows.count();
        const { items } = await api.get('drivers')
        expect(items.length).toBe(rows);
    })

    test('Verify totals on trucks page', async ({ trucksPage, api }) => {
        await goto(trucksPage);
        await expect(trucksPage.trucksTable).toBeVisible();
        const { items, total } = await api.get('trucks');
        expect(trucksPage.footer.pages).toHaveText(`1-${items.length} of ${total}`);
    })

    test('Replace column values', async ({ trucksPage, page }) => {        
        await page.route('/api/v1/trucks?*', async route => {
          const response = await route.fetch();
          const json = await response.json();
          const replace = number => number.toString().split('')
            .map(item => ['😀', '🫠', '😱', '🤤', '🤥', '🥵', '😎', '🤢', '👺', '👽️'][item]).join('');
          json.items.filter(item => !!item.trailer).forEach(item => {
              item.trailer.payload = replace(item.trailer.payload);
              item.trailer.length = replace(item.trailer.length);
              item.trailer.min_width = replace(item.trailer.min_width);
              item.trailer.min_height = replace(item.trailer.min_height);
          });
          await route.fulfill({ response, json });
        });
    
        await goto(trucksPage);
        await page.waitForSelector('[data-qa="truck-trailer-dims"]');
        await page.waitForTimeout(30000);
      });
})
