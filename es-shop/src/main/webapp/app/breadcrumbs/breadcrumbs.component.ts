/**
 * Created by phatnguyen on 2/3/17.
 */
import {Component, Input} from "@angular/core";
import {Breadcrumb} from "./shared/breadcrumb.model";

@Component({
    selector: 'eshop-breadcrumbs',
    templateUrl: 'app/breadcrumbs/breadcrumbs.component.html'
})
export class BreadcrumbsComponent {

    @Input() breadcrumbs: Breadcrumb[];

}