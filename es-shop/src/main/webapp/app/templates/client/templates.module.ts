/**
 * Created by phatnguyen on 10/30/16.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import { FormsModule }    from '@angular/forms';


import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {CarouselModule} from 'ng2-bootstrap';
import {HeaderComponent} from "./header/header.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {TopComponent} from "./top/top.component";
import {TemplatesComponent} from "./templates.component";
import {RouterModule} from "@angular/router";
import {CartSummaryComponent} from "../../cart/cart-summary/cart-summary.component";
import {CartDetailComponent} from "../../cart/cart-detail/cart-detail.component";
import {CartModule} from "../../cart/cart.module";

@NgModule({
    imports: [
        CommonModule,
        //FormsModule
        CarouselModule.forRoot(),
        RouterModule,
        CartModule
    ],
    declarations: [
        HeaderComponent,
        NavBarComponent,
        TopComponent,
        FooterComponent,
        CarouselComponent,
        TemplatesComponent
    ],
    exports: [
        HeaderComponent,
        NavBarComponent,
        TopComponent,
        FooterComponent,
        CarouselComponent,
        TemplatesComponent
    ]
})
export class TemplatesModule {

}
