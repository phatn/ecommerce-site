import { Component, Input} from '@angular/core';
import { Product } from "../shared/product.model";
import {Cart} from "../../cart/shared/cart.model";

@Component({
    selector: 'eshop-product-list',
    moduleId: module.id,
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {

    @Input() products: Product[] = [];

    constructor(private cart: Cart) {}

    addToCart(product: Product) {
        this.cart.addLine(product);
    }

}