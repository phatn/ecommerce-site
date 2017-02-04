import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Breadcrumb} from "../../breadcrumbs/shared/breadcrumb.model";
import {rootBreadCrumb} from "../../breadcrumbs/shared/root-breadcrumb";

@Component({
    selector: 'eshop-product-detail',
    templateUrl: 'app/products/product-detail/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    product: Product;

    breadcrumbs: Breadcrumb[] = [];

    constructor(private productService: ProductService,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) =>
                this.productService.getBySefUrl(params['prodSefUrl']))
            .subscribe(data => {
                this.buildBreadcrumbs(data.category.sefUrl);
                return this.product = data;
            },error => {
                alert('Problem loading product detail');
            });
    }

    private buildBreadcrumbs(catSefUrl: string): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb(`products/category/${catSefUrl}`, catSefUrl.replace("-", " ")));
    }
}