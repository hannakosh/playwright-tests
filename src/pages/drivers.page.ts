import { BaseViewPage } from "./base-view.page";

export class DriversPage extends BaseViewPage {
    readonly pageUrl = 'users/drivers';
    readonly tableRows = this.locator('[class="v-data-table__tr"]');
}
