/**
 * Created by phatnguyen on 1/27/17.
 */

import { Component } from '@angular/core';

import { CarouselConfig } from 'ng2-bootstrap';

@Component({
    selector: 'eshop-carousel',
    moduleId: module.id,
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css'],
    providers: [{provide: CarouselConfig, useValue: { interval: 3000, noPause: true }}]
})
export class CarouselComponent {

}