/**
 * Created by phatnguyen on 2/15/17.
 */

import {NgModule} from '@angular/core';
import {Cart} from "./shared/cart.model";
import {CartSummaryComponent} from "./cart-summary/cart-summary.component";
import {CommonModule} from "@angular/common";


@NgModule({
    providers: [Cart],
    imports: [CommonModule],
    declarations: [CartSummaryComponent],
    exports: [CartSummaryComponent]
})
export class CartModule { }
