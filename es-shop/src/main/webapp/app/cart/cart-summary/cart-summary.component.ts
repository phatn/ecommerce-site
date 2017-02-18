import {Component, Input} from "@angular/core";
import {Cart} from "../shared/cart.model";
/**
 * Created by phatnguyen on 2/18/17.
 */

@Component({
    selector: 'eshop-cart-summary',
    moduleId: module.id,
    templateUrl: 'cart-summary.component.html'
})
export class CartSummaryComponent {

    constructor(public cart: Cart) {}

}