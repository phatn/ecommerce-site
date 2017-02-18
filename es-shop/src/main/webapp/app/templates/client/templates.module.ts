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

@NgModule({
    imports: [
        CommonModule,
        //FormsModule
        CarouselModule.forRoot(),
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        NavBarComponent,
        TopComponent,
        FooterComponent,
        CarouselComponent,
        TemplatesComponent,
        CartSummaryComponent
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
