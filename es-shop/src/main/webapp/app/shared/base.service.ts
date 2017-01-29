/**
 * Created by phatnguyen on 1/15/17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService {

    static headers = new Headers({ 'Content-Type': 'application/json' });
    static options = new RequestOptions({ headers: BaseService.headers });

    protected extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    protected handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}