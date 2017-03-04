import {Injectable} from "@angular/core";
import {Customer} from "../../customers/shared/customer.model";
import {OrderLine} from "./order-line.model";
/**
 * Created by phatnguyen on 3/4/17.
 */

@Injectable()
export class Order {

    public name: string;

    public customer: Customer = new Customer();

    public orderLines: OrderLine[] = [];

    public deliveryMethod: string;

    public paymentMethod: string;

}