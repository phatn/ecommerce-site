import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


import {CategoryModule} from "./categories/category.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeProductListComponent} from "./home/home-product-list/home-product-list.component";
import {TemplatesModule} from "./templates/client/templates.module";
import {ProductModule} from "./products/product.module";
import {HomeComponent} from "./home/home.component";
import {TemplatesRoutingModule} from "./templates/client/templates-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        TemplatesModule,
        ProductModule,
        CategoryModule,
        TemplatesRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeProductListComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
