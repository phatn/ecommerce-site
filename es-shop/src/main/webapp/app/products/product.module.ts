/**
 * Created by phatnguyen on 10/30/16.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductService} from "./shared/product.service";
import {ProductListManufacturerComponent} from "./product-list-manufacturer/product-list-manufacturer.component";
import {PaginationModule} from 'ng2-bootstrap';
import {FormsModule} from "@angular/forms";
import {ProductListPriceComponent} from "./product-list-price/product-list-price.component";
import {RouterModule} from "@angular/router";
import {ProductListCategoryComponent} from "./product-list-category/product-list-category.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {GalleryModule} from "../gallery/gallery.module";
import {Cart} from "../cart/shared/cart.model";
import {BreadcrumbsModule} from "../breadcrumbs/breadcrumbs.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
        RouterModule,
        GalleryModule,
        BreadcrumbsModule
    ],
    declarations: [
        ProductListComponent,
        ProductListManufacturerComponent,
        ProductListPriceComponent,
        ProductListCategoryComponent,
        ProductDetailComponent
    ],
    exports: [
        ProductListComponent,
        ProductListManufacturerComponent,
        ProductListPriceComponent,
        ProductListCategoryComponent,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        Cart
    ]
})
export class ProductModule {

}
