import {Delivery} from "./delivery";
/**
 * Created by phatnguyen on 2/28/17.
 */

export class Customer {
    constructor(public id: number,
                public firstName: string,
                public lastName: string,
                public email: string,
                public userName: string,
                public password: string,
                public delivery: Delivery) {}
}