import {AppSettings} from "./app-settings";
/**
 * Created by phatnguyen on 1/30/17.
 */
export class PageRequest {
    constructor(public page: number = 1,
                public size: number = AppSettings.PAGE_SIZE) {}

    reset(): void {
        this.page = 1;
        this.size = AppSettings.PAGE_SIZE;
    }
}