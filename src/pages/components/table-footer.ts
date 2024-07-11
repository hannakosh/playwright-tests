import { Base } from "../base";

export class TableFooter extends Base {
    readonly tableFooter = this.page.locator('.v-data-table-footer');
    readonly perPageDropdown = this.tableFooter.locator('.v-data-table-footer__items-per-page .v-input');
    readonly pages = this.tableFooter.locator('.v-data-table-footer__info div');
    readonly prevButton = this.tableFooter.locator('.v-pagination__list [data-test="v-pagination-prev"]');
    readonly nextButton = this.tableFooter.locator('.v-pagination__list [data-test="v-pagination-next"]');
}
