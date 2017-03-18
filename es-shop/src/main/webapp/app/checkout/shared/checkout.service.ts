import {Injectable} from "@angular/core";
import {BaseService} from "../../shared/base.service";
import {Order} from "./order.model";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {CookieService} from 'angular2-cookie/core';
import {AppSettings} from "../../shared/app-settings";
import {RequestOptions} from '@angular/http';
import {ChargeInfo} from "./charge-info.model";

/**
 * Created by phatnguyen on 3/4/17.
 */

const ORDER_CREATE_URL:string = 'api/orders';

const PAYMENT_URL:string = 'api/payments';

@Injectable()
export class CheckoutService extends BaseService {

    constructor(private http: Http,
                private cookieService: CookieService) {
        super();
    }

    placeOrder(order: Order): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('JWT-TOKEN', this.cookieService.get(AppSettings.CUSTOMER_JWT_TOKEN_KEY))
        let options = new RequestOptions({ headers: headers });
        return this.http.post(ORDER_CREATE_URL, JSON.stringify(order), options)
            .map(res => this.extractBody(res))
            .catch(this.handleError);
    }

    handleCharge(chargeInfo: ChargeInfo): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('JWT-TOKEN', this.cookieService.get(AppSettings.CUSTOMER_JWT_TOKEN_KEY))
        let options = new RequestOptions({ headers: headers });
        return this.http.post(PAYMENT_URL, JSON.stringify(chargeInfo), options)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

}