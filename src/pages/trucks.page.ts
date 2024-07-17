import { BaseViewPage } from "./base-view.page";

export class TrucksPage extends BaseViewPage {
    readonly pageUrl =  'fleets/trucks';
    readonly trucksTable = this.locator('table');
}
