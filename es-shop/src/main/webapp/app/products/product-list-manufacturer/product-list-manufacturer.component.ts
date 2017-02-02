import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/product.model";
import {PageRequest} from "../../shared/page-request";
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {AppSettings} from "../../shared/app-settings";


@Component({
    selector: 'eshop-product-list-manufacturer',
    templateUrl: 'app/products/product-list-manufacturer/product-list-manufacturer.component.html'
})
export class ProductListManufacturerComponent implements OnInit {

    products: Product[];

    pageRequest: PageRequest = new PageRequest();

    totalItems: number = 0;

    itemsPerPage:number = AppSettings.PAGE_SIZE;

    constructor(private productSerivce: ProductService,
                private route: ActivatedRoute){}

    ngOnInit(): void {
        this.loadProductByManufacturer();
    }

    public pageChanged(event: any): void {
        this.pageRequest.page = event.page;
        this.loadProductByManufacturer();
    }

    private loadProductByManufacturer(): void {
        this.route.params
            .switchMap((params: Params) => this.productSerivce.getByManufacturerInCategory(params['catSefUrl'], params['manuSefUrl'], this.pageRequest))
            .subscribe(body => {
                this.products = body.data;
                this.totalItems = body.totalItems;
            });
    }
}