import {Product} from "../../products/shared/product.model";
import {Order} from "./order.model";
/**
 * Created by phatnguyen on 3/4/17.
 */
export class OrderLine {

    constructor(public product: Product,
                public quantity: number) {}
}