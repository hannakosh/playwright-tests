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
})
