/**
 * Created by phatnguyen on 1/16/17.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';

import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryService } from "./shared/category.service";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryDetailComponent
    ],
    exports: [
        CategoryListComponent,
        CategoryDetailComponent
    ],
    providers: [
        CategoryService
    ]
})
export class CategoryModule {

}
