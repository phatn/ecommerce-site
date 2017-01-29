/**
 * Created by phatnguyen on 10/30/16.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import {ProductService} from "./shared/product.service";


@NgModule({
    imports: [
        CommonModule
        //FormsModule
    ],
    declarations: [
        ProductListComponent
    ],
    exports: [
        ProductListComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {

}
