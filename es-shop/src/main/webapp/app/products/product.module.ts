/**
 * Created by phatnguyen on 10/30/16.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import {ProductService} from "./shared/product.service";
import {ProductListManufacturerComponent} from "./product-list-manufacturer/product-list-manufacturer.component";
import {PaginationModule} from 'ng2-bootstrap';
import {FormsModule} from "@angular/forms";
import {ProductListPriceComponent} from "./product-list-price/product-list-price.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot()

    ],
    declarations: [
        ProductListComponent,
        ProductListManufacturerComponent,
        ProductListPriceComponent
    ],
    exports: [
        ProductListComponent,
        ProductListManufacturerComponent,
        ProductListPriceComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {

}
