/**
 * Created by phatnguyen on 1/31/17.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TemplatesComponent} from "./templates.component";
import {HomeComponent} from "../../home/home.component";
import {ProductListManufacturerComponent} from "../../products/product-list-manufacturer/product-list-manufacturer.component";
import {ProductListPriceComponent} from "../../products/product-list-price/product-list-price.component";


const templatesRoutes: Routes = [
    { path: '', component: TemplatesComponent,
        children: [
            { path : '', component: HomeComponent},
            { path: 'products/category/:catSefUrl/manufacturer/:manuSefUrl', component: ProductListManufacturerComponent},
            { path: 'products/category/:catSefUrl/price/:name', component: ProductListPriceComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(templatesRoutes)
    ]
})
export class TemplatesRoutingModule { }