import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
/**
 * Created by phatnguyen on 4/8/17.
 */
const adminTemplatesRoutes: Routes = [
    { path: 'admin', component: AdminTemplatesComponent,
        children: [
            { path : '', component: AdminHomeComponent},
            { path: 'products/category/:catSefUrl', component: ProductListCategoryComponent},
            { path: 'products/category/:catSefUrl/manufacturer/:manuSefUrl', component: ProductListManufacturerComponent},
            { path: 'products/category/:catSefUrl/price/:name', component: ProductListPriceComponent},
            { path: 'product/:prodSefUrl', component: ProductDetailComponent},
            { path: 'cart', component: CartDetailComponent},
            { path: 'order-confirmation', component: OrderConfirmationComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminTemplatesRoutes)
    ]
})
export class AdminTemplatesRoutingModule { }