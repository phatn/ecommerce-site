/**
 * Created by phatnguyen on 10/30/16.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule }    from '@angular/forms';

import { HeaderComponent} from 'app/templates/header/header.component';
import { NavBarComponent } from 'app/templates/nav-bar/nav-bar.component';
import { TopComponent } from 'app/templates/top/top.component';
import { FooterComponent } from "./footer/footer.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CarouselModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        //FormsModule
        CarouselModule.forRoot()
    ],
    declarations: [
        HeaderComponent,
        NavBarComponent,
        TopComponent,
        FooterComponent,
        CarouselComponent
    ],
    exports: [
        HeaderComponent,
        NavBarComponent,
        TopComponent,
        FooterComponent,
        CarouselComponent
    ]
})
export class TemplatesModule {

}
