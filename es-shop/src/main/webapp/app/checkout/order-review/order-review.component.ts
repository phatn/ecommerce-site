import {Component} from "@angular/core";
import {Order} from "../shared/order.model";
import {Router} from "@angular/router";
import {Cart} from "../../cart/shared/cart.model";
/**
 * Created by phatnguyen on 2/26/17.
 */

@Component({
    selector: 'eshop-checkout-order-review',
    moduleId: module.id,
    templateUrl: 'order-review.component.html'
})
export class OrderReviewComponent {

    constructor(private order: Order,
                private router: Router,
                private cart: Cart) {}

    placeOrder() {
        alert(JSON.stringify(this.order));
    }
}