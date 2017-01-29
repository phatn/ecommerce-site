/**
 * Created by phatnguyen on 1/15/17.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { BaseService } from "../../shared/base.service";
import { Category } from "./category.model";

const CATEGORY_GET_ALL_URL:string = 'api/categories';

@Injectable()
export class CategoryService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    getCategories(): Observable<Category[]> {
        return this.http.get(CATEGORY_GET_ALL_URL)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }
}
