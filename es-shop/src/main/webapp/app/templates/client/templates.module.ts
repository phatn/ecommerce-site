/**
 * Created by phatnguyen on 10/30/16.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {CarouselModule} from 'ng2-bootstrap';
import {HeaderComponent} from "./header/header.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {TopComponent} from "./top/top.component";
import {TemplatesComponent} from "./templates.component";
import {RouterModule} from "@angular/router";
import {CartModule} from "../../cart/cart.module";
import {CheckoutModule} from "../../checkout/checkout.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule, FormsModule, CarouselModule.forRoot(),
        RouterModule, CartModule, CheckoutModule
    ],
    declarations: [HeaderComponent, NavBarComponent, TopComponent,
        FooterComponent, CarouselComponent, TemplatesComponent
    ],
    exports: [HeaderComponent, NavBarComponent, TopComponent,
        FooterComponent, CarouselComponent, TemplatesComponent
    ]
})
export class TemplatesModule {

}
