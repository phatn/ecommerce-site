/**
 * Created by phatnguyen on 1/31/17.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TemplatesComponent} from "./templates.component";
import {HomeComponent} from "../../home/home.component";
import {ProductListPriceComponent} from "../../products/product-list-price/product-list-price.component";
import {ProductListManufacturerComponent} from "../../products/product-list-manufacturer/product-list-manufacturer.component";
import {ProductListCategoryComponent} from "../../products/product-list-category/product-list-category.component";
import {ProductDetailComponent} from "../../products/product-detail/product-detail.component";
import {CartDetailComponent} from "../../cart/cart-detail/cart-detail.component";


const templatesRoutes: Routes = [
    { path: '', component: TemplatesComponent,
        children: [
            { path : '', component: HomeComponent},
            { path: 'products/category/:catSefUrl', component: ProductListCategoryComponent},
            { path: 'products/category/:catSefUrl/manufacturer/:manuSefUrl', component: ProductListManufacturerComponent},
            { path: 'products/category/:catSefUrl/price/:name', component: ProductListPriceComponent},
            { path: 'product/:prodSefUrl', component: ProductDetailComponent},
            { path: 'cart', component: CartDetailComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(templatesRoutes)
    ]
})
export class TemplatesRoutingModule { }