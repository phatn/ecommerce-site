/**
 * Created by phatnguyen on 2/19/17.
 */

import {Component, OnInit} from "@angular/core";
import {Cart} from "../shared/cart.model";
import {Router} from "@angular/router";
import {Breadcrumb} from "../../breadcrumbs/shared/breadcrumb.model";
import {rootBreadCrumb} from "../../breadcrumbs/shared/root-breadcrumb";

@Component({
    selector: 'eshop-cart-detail',
    moduleId: module.id,
    templateUrl: 'cart-detail.component.html'
})
export class CartDetailComponent implements OnInit {

    breadcrumbs: Breadcrumb[] = [];

    constructor(public cart: Cart,
                private router: Router) {}


    ngOnInit(): void {
        this.buildBreadcrumbs();
    }

    private buildBreadcrumbs(): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb('', 'cart', true));
    }
}