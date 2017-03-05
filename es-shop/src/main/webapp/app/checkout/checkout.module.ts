import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CheckoutComponent} from "./checkout.component";
import {AddressComponent} from "./address/address.component";
import {DeliveryMethodComponent} from "./delivery-method/delivery-method.component";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";
import {OrderReviewComponent} from "./order-review/order-review.component";
import {AuthGuard} from "../core/auth-guard.service";
import {RouterModule} from "@angular/router";
import {CheckoutService} from "./shared/checkout.service";
/**
 * Created by phatnguyen on 2/26/17.
 */

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [CheckoutComponent, AddressComponent,
        DeliveryMethodComponent, PaymentMethodComponent,
        OrderReviewComponent],
    exports: [CheckoutComponent],
    providers: [AuthGuard, CheckoutService]
})
export class CheckoutModule {

}
