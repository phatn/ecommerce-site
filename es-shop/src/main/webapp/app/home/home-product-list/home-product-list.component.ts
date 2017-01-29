/**
 * Created by phatnguyen on 1/26/17.
 */
import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../products/shared/product.service";
import { Product } from "../../products/shared/product.model";
import { ProductImage } from "../../products/shared/product-image.model";

@Component({
    selector: 'eshop-home-product-list',
    templateUrl: 'app/home/home-product-list/home-product-list.component.html'
})
export class HomeProductListComponent implements OnInit {

    newArrivals: Product[];

    constructor(private productService: ProductService) {}


    ngOnInit(): void {
        this.productService.getNewArrivals().subscribe(
            data => {
                this.newArrivals = data;
                this.sortProductImages();
            },
            error => {
                alert('Problem loading new arrivals products');
            }
        );
    }

    sortProductImages() {
        for(let product of this.newArrivals) {
            product.productImages.sort((leftSide: ProductImage, rightSide: ProductImage): number => {
                if(leftSide.sortOrder < rightSide.sortOrder) {
                    return -1;
                } else if(leftSide.sortOrder > rightSide.sortOrder) {
                    return 1;
                }
                return 0;
            });
        }
    }

}