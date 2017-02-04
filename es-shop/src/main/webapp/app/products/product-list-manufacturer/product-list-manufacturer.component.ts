import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/product.model";
import {PageRequest} from "../../shared/page-request";
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {AppSettings} from "../../shared/app-settings";
import {Breadcrumb} from "../../breadcrumbs/shared/breadcrumb.model";
import {rootBreadCrumb} from "../../breadcrumbs/shared/root-breadcrumb";


@Component({
    selector: 'eshop-product-list-manufacturer',
    templateUrl: 'app/products/product-list-manufacturer/product-list-manufacturer.component.html'
})
export class ProductListManufacturerComponent implements OnInit {

    products: Product[];

    pageRequest: PageRequest = new PageRequest();

    totalItems: number = 0;

    itemsPerPage:number = AppSettings.PAGE_SIZE;

    breadcrumbs: Breadcrumb[] = [];

    constructor(private productService: ProductService,
                private route: ActivatedRoute){}

    ngOnInit(): void {
        this.loadProductByManufacturer();
    }

    public pageChanged(event: any): void {
        this.pageRequest.page = event.page;
        this.loadProductByManufacturer(false);
    }

    private loadProductByManufacturer(isResetPageRequest: boolean = true): void {
        this.route.params
            .switchMap((params: Params) => {
                if(isResetPageRequest) {
                    this.pageRequest.reset();
                    this.buildBreadcrumbs(params['catSefUrl'], params['manuSefUrl']);
                }
                return this.productService.
                    getByManufacturerInCategory(params['catSefUrl'], params['manuSefUrl'], this.pageRequest)
            })
            .subscribe(body => {
                this.products = body.data;
                this.totalItems = body.totalItems;
            });
    }

    private buildBreadcrumbs(catSefUrl: string, manuSefUrl: string): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb(`category/${catSefUrl}`, catSefUrl.replace("-", " ")));
        this.breadcrumbs.push(new Breadcrumb("", manuSefUrl.replace("-", " "), true));
    }
}