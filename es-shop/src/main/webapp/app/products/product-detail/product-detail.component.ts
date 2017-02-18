import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductService} from "../shared/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Breadcrumb} from "../../breadcrumbs/shared/breadcrumb.model";
import {rootBreadCrumb} from "../../breadcrumbs/shared/root-breadcrumb";
import {error} from "util";
import {Attribute} from "../shared/attribute.model";

@Component({
    selector: 'eshop-product-detail',
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    product: Product;

    relatedProducts: Product[];

    breadcrumbs: Breadcrumb[] = [];

    sefUrl: string;

    sub: any;

    constructor(private productService: ProductService,
                private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            if(params['prodSefUrl'] !== undefined) {
                this.sefUrl = params['prodSefUrl'];
                this.loadProductDetail();
                this.loadProductRelationships();
            }
        });

    }

    getHightlightAttributes(): Attribute[] {
        let attributes: Attribute[] = [];
        if(!this.product || !this.product.attributes) {
            return attributes;
        }

        for(let att of this.product.attributes) {
            if(att.highlight) {
                attributes.push(att);
            }
        }
        return attributes;
    }

    private buildBreadcrumbs(catSefUrl: string): void {
        this.breadcrumbs = [];
        this.breadcrumbs.push(rootBreadCrumb);
        this.breadcrumbs.push(new Breadcrumb(`products/category/${catSefUrl}`, catSefUrl.replace("-", " ")));
    }

    private loadProductDetail(): void {
        this.productService.getBySefUrl(this.sefUrl)
            .subscribe(data => {
                this.buildBreadcrumbs(data.category.sefUrl);
                return this.product = data;
            }, error => {
                alert('Problem loading product detail');
            });
    }

    private loadProductRelationships(): void {
        this.productService.getRelationshipsBySefUrl(this.sefUrl)
            .subscribe(data => this.relatedProducts = data),
            error => {
                alert('Problem loading product relationships');
            };
    }

}