/**
 * Created by phatnguyen on 2/4/17.
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
    selector: 'eshop-product-list-category',
    templateUrl: 'app/products/product-list-category/product-list-category.component.html'
})
export class ProductListCategoryComponent implements OnInit {

    products: Product[];

    pageRequest: PageRequest = new PageRequest();

    totalItems: number = 0;

    itemsPerPage:number = AppSettings.PAGE_SIZE;

    breadcrumbs: Breadcrumb[] = [];

    constructor(private productService: ProductService,
                private route: ActivatedRoute){}

    ngOnInit(): void {
        this.loadProductByCategory();
    }

    public pageChanged(event: any): void {
        this.pageRequest.page = event.page;
        this.loadProductByCategory(false);
    }

    private loadProductByCategory(isResetPageRequest: boolean = true): void {
        this.route.params
            .switchMap((params: Params) => {
                if(isResetPageRequest) {
                    this.pageRequest.reset();
                    this.buildBreadcrumbs(params['catSefUrl']);
                }
                return this.productService.
                getByCategory(params['catSefUrl'], this.pageRequest)
            })
            .subscribe(body => {
                this.products = body.data;
                this.totalItems = body.totalItems;
            });
    }

    private buildBreadcrumbs(catSefUrl: string): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb(`products/category/${catSefUrl}`, catSefUrl.replace("-", " "), true));
    }
}