/**
 * Created by phatnguyen on 2/19/17.
 */

import {Component, OnInit} from "@angular/core";
import {Cart} from "../shared/cart.model";
import {Router} from "@angular/router";
import {Breadcrumb} from "../../breadcrumbs/shared/breadcrumb.model";
import {rootBreadCrumb} from "../../breadcrumbs/shared/root-breadcrumb";
import {Location} from "@angular/common";

@Component({
    selector: 'eshop-cart-detail',
    moduleId: module.id,
    templateUrl: 'cart-detail.component.html'
})
export class CartDetailComponent implements OnInit {

    breadcrumbs: Breadcrumb[] = [];

    constructor(public cart: Cart,
                private location: Location,
                private router: Router) {}


    ngOnInit(): void {
        this.buildBreadcrumbs();
    }

    removeLine(productId: number) {
        this.cart.removeLine(productId);
    }

    continueShopping() {
        this.location.back();
    }

    updateQuantity(product, $event) {
        this.cart.updateQuantity(product, $event);
    }

    checkout() {
        this.router.navigateByUrl('/checkout');
    }

    private buildBreadcrumbs(): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb('', 'cart', true));
    }
}