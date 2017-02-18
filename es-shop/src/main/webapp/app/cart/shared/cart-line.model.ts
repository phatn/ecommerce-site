/**
 * Created by phatnguyen on 2/15/17.
 */

import {Product} from "../../products/shared/product.model";

export class CartLine {

    constructor(public product: Product,
                public quantity: number) {}

    getLineTotal(): number {
        if(this.product.salePrice) {
            return this.quantity * this.product.salePrice;
        }
        return this.quantity * this.product.price;
    }
}