/**
 * Created by phatnguyen on 1/15/17.
 */
import { CategoryDescription } from './category-description.model';
import { Product } from 'app/products/shared/product.model';
import { PriceRange } from "./price-range.model";
export class Category {

    constructor(public id: number,
                public sortOrder: number,
                public available: boolean,
                public depth: number,
                public code: string,
                public parent: Category,
                public categories: Category[],
                public descriptions: CategoryDescription[],
                public products: Product[],
                public priceRanges: PriceRange[]) {}
}
