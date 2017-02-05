/**
 * Created by phatnguyen on 1/27/17.
 */

import { Component } from '@angular/core';

import { CarouselConfig } from 'ng2-bootstrap';

@Component({
    selector: 'eshop-carousel',
    templateUrl: 'app/templates/client/carousel/carousel.component.html',
    styleUrls: ['app/templates/client/carousel/carousel.component.css'],
    providers: [{provide: CarouselConfig, useValue: { interval: 3000, noPause: true }}]
})
export class CarouselComponent {

}