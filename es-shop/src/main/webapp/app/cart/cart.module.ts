/**
 * Created by phatnguyen on 2/15/17.
 */

import {NgModule} from '@angular/core';
import {CartSummaryComponent} from "./cart-summary/cart-summary.component";
import {CommonModule} from "@angular/common";
import {CartDetailComponent} from "./cart-detail/cart-detail.component";
import {FormsModule} from "@angular/forms";
import {BreadcrumbsModule} from "../breadcrumbs/breadcrumbs.module";


@NgModule({
    imports: [CommonModule, FormsModule, BreadcrumbsModule],
    declarations: [CartSummaryComponent, CartDetailComponent],
    exports: [CartSummaryComponent, CartDetailComponent]
})
export class CartModule {

}
