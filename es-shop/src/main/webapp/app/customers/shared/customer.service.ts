import {Injectable} from "@angular/core";
import {BaseService} from "../../shared/base.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Customer} from "./customer.model";

/**
 * Created by phatnguyen on 2/28/17.
 */

const CUSTOMER_LOGIN_URL:string = 'api/customers/login';

@Injectable()
export class CustomerService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    login(customer: Customer): Observable<any> {

        return this.http.post(CUSTOMER_LOGIN_URL, JSON.stringify(customer), BaseService.options)
            .map(res => this.extractBody(res))
            .catch(this.handleError);
    }

}