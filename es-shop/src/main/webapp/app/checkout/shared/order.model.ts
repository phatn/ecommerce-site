import {Injectable} from "@angular/core";
import {Customer} from "../../customers/shared/customer.model";
import {OrderLine} from "./order-line.model";
import {Card} from "./card.model";
/**
 * Created by phatnguyen on 3/4/17.
 */

@Injectable()
export class Order {

    public customer: Customer;

    public orderLines: OrderLine[];

    public deliveryMethod: string;

    public paymentMethod: string;

    public orderStatus: string = 'NEW';

    public card: Card = new Card();

    reset() {
        this.customer = null;
        this.orderLines = null;
        this.deliveryMethod = null;
        this.paymentMethod = null;
        this.card = new Card();
    }

}