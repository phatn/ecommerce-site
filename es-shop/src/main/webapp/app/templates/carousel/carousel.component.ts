/**
 * Created by phatnguyen on 1/27/17.
 */

import { Component } from '@angular/core';

import { CarouselConfig } from 'ng2-bootstrap';

@Component({
    selector: 'eshop-carousel',
    templateUrl: 'app/templates/carousel/carousel.component.html',
    providers: [{provide: CarouselConfig, useValue: { interval: 3000, noPause: true }}]
})
export class CarouselComponent {

}