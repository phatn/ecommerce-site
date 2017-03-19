import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./checkout.component";
import {AddressComponent} from "./address/address.component";
import {DeliveryMethodComponent} from "./delivery-method/delivery-method.component";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";
import {OrderReviewComponent} from "./order-review/order-review.component";
import {AuthGuard} from "../core/auth-guard.service";
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";
/**
 * Created by phatnguyen on 2/26/17.
 */

const checkoutRoutes: Routes = [
    { path: 'checkout', component: CheckoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path : 'address', component: AddressComponent},
            { path: 'delivery-method', component: DeliveryMethodComponent},
            { path: 'payment-method', component: PaymentMethodComponent},
            { path: 'order-review', component: OrderReviewComponent},
            { path: '', redirectTo: 'address', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(checkoutRoutes)
    ]
})
export class CheckoutRoutingModule { }