/**
 * Created by phatnguyen on 1/31/17.
 */
import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/product.model";
import {PageRequest} from "../../shared/page-request";
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {AppSettings} from "../../shared/app-settings";
import {Breadcrumb} from "../../breadcrumbs/shared/breadcrumb.model";
import {rootBreadCrumb} from "../../breadcrumbs/shared/root-breadcrumb";


@Component({
    selector: 'eshop-product-list-price',
    moduleId: module.id,
    templateUrl: 'product-list-price.component.html'
})
export class ProductListPriceComponent implements OnInit {

    products: Product[];

    pageRequest: PageRequest = new PageRequest();

    totalItems: number = 0;

    itemsPerPage:number = AppSettings.PAGE_SIZE;

    breadcrumbs: Breadcrumb[] = [];

    constructor(private productSerivce: ProductService,
                private route: ActivatedRoute){}

    ngOnInit(): void {
        this.loadProductsByPriceInCategory(true);
    }

    public pageChanged(event: any): void {
        this.pageRequest.page = event.page;
        this.loadProductsByPriceInCategory(false);
    }

    private loadProductsByPriceInCategory(isResetPageRequest: boolean = true): void {
        this.route.params
            .switchMap((params: Params) => {

                if(isResetPageRequest) {
                    this.pageRequest.reset();
                    this.buildBreadcrumbs(params['catSefUrl'], params['name']);
                }
                return this.productSerivce.getByPriceInCategory(params['catSefUrl'], params['name'],
                    this.pageRequest)})

            .subscribe(body => {
                this.products = body.data;
                this.totalItems = body.totalItems;
            });
    }

    private buildBreadcrumbs(catSefUrl: string, name: string): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb(`products/category/${catSefUrl}`, catSefUrl.replace("-", " ")));
        this.breadcrumbs.push(new Breadcrumb("", name.replace("-", " "), true));
    }
}