/**
 * Created by phatnguyen on 1/31/17.
 */
/**
 * Created by phatnguyen on 1/31/17.
 */
import {Component} from '@angular/core';


@Component({
    selector: 'eshop-templates',
    template:`
        <div id="all">
            <eshop-header></eshop-header>
            <router-outlet></router-outlet>
            <eshop-footer></eshop-footer>
        </div>
    `
})
export class TemplatesComponent  {

}