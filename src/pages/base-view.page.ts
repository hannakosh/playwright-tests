import { Base } from "./base";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { TableFooter } from "./components/table-footer";
import { Navigatable } from "./navigatable";

export abstract class BaseViewPage extends Base implements Navigatable {
    readonly header = new Header(this.page);
    readonly sidebar = new Sidebar(this.page);
    readonly footer = new TableFooter(this.page);
    readonly baseUrl: string;

    url() {
        return this.baseUrl;
    }

    async waitForLoadState(): Promise<void> {
    }
}
