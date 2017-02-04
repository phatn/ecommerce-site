/**
 * Created by phatnguyen on 1/15/17.
 */
import {CategoryDescription} from './category-description.model';
import {PriceRange} from "./price-range.model";
import {Product} from "../../products/shared/product.model";
export class Category {

    constructor(public id: number,
                public sortOrder: number,
                public available: boolean,
                public depth: number,
                public code: string,
                public sefUrl: string,
                public parent: Category,
                public categories: Category[],
                public descriptions: CategoryDescription[],
                public products: Product[],
                public priceRanges: PriceRange[]) {}
}
