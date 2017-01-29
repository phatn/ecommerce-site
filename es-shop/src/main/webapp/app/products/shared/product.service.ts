/**
 * Created by phatnguyen on 1/15/17.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { BaseService } from "../../shared/base.service";
import {Product} from "./product.model";

const PRODUCT_GET_NEW_ARRIVALS_URL:string = 'api/products/new-arrivals';

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
}
