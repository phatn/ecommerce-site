/**
 * Created by phatnguyen on 1/21/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from "../categories/category-list/category-list.component";
import { HomeComponent } from "./home.component";
import { CategoryDetailComponent } from "../categories/category-detail/category-detail.component";
import {HomeProductListComponent} from "./home-product-list/home-product-list.component";

const homeRoutes: Routes = [
   // { path: '', component: HomeComponent }
    { path: '', component: HomeComponent,
        children: [
            { path: '',  component: HomeProductListComponent },
            { path: 'samsung', component: CategoryListComponent },
            { path: 'sony', component: CategoryDetailComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }