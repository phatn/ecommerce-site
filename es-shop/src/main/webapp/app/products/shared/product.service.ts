/**
 * Created by phatnguyen on 1/15/17.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { BaseService } from "../../shared/base.service";
import {Product} from "./product.model";
import {PageRequest} from "../../shared/page-request";

const PRODUCT_GET_NEW_ARRIVALS_URL:string = 'api/products/new-arrivals';
const PRODUCT_GET_BY_MANUFACTURER_IN_CATEGORY_URL:string = 'api/products/category';
const PRODUCT_GET_BY_PRICE_IN_CATEGORY_URL:string = 'api/products/category';
const PRODUCT_GET_BY_CATEGORY_URL:string = 'api/products/category';
const PRODUCT_GET_BY_SEF_URL_URL:string = 'api/products';
const PRODUCT_GET_RELATIONSHIPS_BY_SEF_URL_URL:string = 'api/products';

@Injectable()
export class ProductService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    getNewArrivals(): Observable<Product[]> {
        return this.http.get(PRODUCT_GET_NEW_ARRIVALS_URL)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    getByManufacturerInCategory(catSefUrl: string, manuSelUrl: string, pageRequest: PageRequest): Observable<any> {
        return this.http.get(
            `${PRODUCT_GET_BY_MANUFACTURER_IN_CATEGORY_URL}/${catSefUrl}/manufacturer/${manuSelUrl}/page/${pageRequest.page}/size/${pageRequest.size}`)
            .map(res => this.extractBody(res))
            .catch(this.handleError);
    }

    getByPriceInCategory(catSefUrl: string, name: string, pageRequest: PageRequest): Observable<any> {
        return this.http.get(
            `${PRODUCT_GET_BY_PRICE_IN_CATEGORY_URL}/${catSefUrl}/price/${name}/page/${pageRequest.page}/size/${pageRequest.size}`)
            .map(res => this.extractBody(res))
            .catch(this.handleError);
    }

    getByCategory(catSefUrl: string, pageRequest: PageRequest): Observable<any> {
        return this.http.get(
            `${PRODUCT_GET_BY_CATEGORY_URL}/${catSefUrl}/page/${pageRequest.page}/size/${pageRequest.size}`)
            .map(res => this.extractBody(res))
            .catch(this.handleError);
    }

    getBySefUrl(prodSefUrl: string): Observable<Product> {
        return this.http.get(`${PRODUCT_GET_BY_SEF_URL_URL}/${prodSefUrl}`)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    getRelationshipsBySefUrl(prodSefUrl: string): Observable<Product[]> {
        return this.http.get(`${PRODUCT_GET_RELATIONSHIPS_BY_SEF_URL_URL}/${prodSefUrl}/relationships`)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

}
