/**
 * Created by phatnguyen on 2/3/17.
 */

import {BreadcrumbsComponent} from "./breadcrumbs.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [BreadcrumbsComponent],
    exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {

}
