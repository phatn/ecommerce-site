import { ProductDescription } from './product-description.model';
import { ProductImage } from "./product-image.model";

export class Product {

    constructor(public id: number,
                public sku: string,
                public price: number,
                public salePrice: number,
                public sortOrder: number,
                public descriptions: ProductDescription[],
                public productImages: ProductImage[],
                public sefUrl: string,
                public newArrivals: boolean) {}
}