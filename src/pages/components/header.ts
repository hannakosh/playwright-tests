import { Base } from "../base";

export class Header extends Base {
    protected readonly root = this.locator('header');
    readonly userButton = this.locator('[aria-haspopup="menu"]').first();
    readonly userName = this.userButton.locator('.body-2');
    readonly menuMyCompany = this.locator('.v-overlay .v-list-item').getByText('My company');
}