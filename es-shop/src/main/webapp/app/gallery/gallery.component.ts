/**
 * Created by phatnguyen on 2/7/17.
 */
import {Component, Input} from '@angular/core';
import {ProductImage} from "../products/shared/product-image.model";

declare const jQuery:any;

@Component({
    selector: 'eshop-gallery',
    moduleId: module.id,
    templateUrl: 'gallery.component.html'
})
export class GalleryComponent {

    @Input() productImages: ProductImage[];

    ngAfterViewInit() {
        jQuery('.fotorama').fotorama();
    }
}