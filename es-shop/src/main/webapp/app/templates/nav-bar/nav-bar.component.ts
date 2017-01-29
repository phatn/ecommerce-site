import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'app/categories/shared/category.service';
import { Category } from "../../categories/shared/category.model";
import {PriceRange} from "../../categories/shared/price-range.model";

@Component({
    selector: 'eshop-nav-bar',
    templateUrl: 'app/templates/nav-bar/nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

    categories: Category[] = [];

    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.categoryService.getCategories().subscribe(
            data => {
                this.categories = data;
                this.sortPriceRanges();
            },
            error => {
                alert('Problem loading categories');
            }
        );
    }

    sortPriceRanges() {
        for(let cat of this.categories) {
            cat.priceRanges.sort((leftSide: PriceRange, rightSide: PriceRange): number => {
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