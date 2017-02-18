import {Component, Input} from "@angular/core";
import {Cart} from "../shared/cart.model";
import {Router} from "@angular/router";
/**
 * Created by phatnguyen on 2/18/17.
 */

@Component({
    selector: 'eshop-cart-summary',
    moduleId: module.id,
    templateUrl: 'cart-summary.component.html'
})
export class CartSummaryComponent {

    constructor(public cart: Cart,
                private router: Router) {}

    viewCartDetail() {
        this.router.navigateByUrl('/cart')
    }
}