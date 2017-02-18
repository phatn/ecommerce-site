import { Component, Input} from '@angular/core';
import { Product } from "../shared/product.model";

@Component({
    selector: 'eshop-product-list',
    moduleId: module.id,
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {

    @Input() products: Product[] = [];

    addToCart() {
        alert("Added to cart");
    }

}