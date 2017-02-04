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
import {BreadcrumbsComponent} from "../breadcrumbs/breadcrumbs.component";
import {ProductListCategoryComponent} from "./product-list-category/product-list-category.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
        RouterModule
    ],
    declarations: [
        ProductListComponent,
        ProductListManufacturerComponent,
        ProductListPriceComponent,
        ProductListCategoryComponent,
        BreadcrumbsComponent
    ],
    exports: [
        ProductListComponent,
        ProductListManufacturerComponent,
        ProductListPriceComponent,
        ProductListCategoryComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {

}
