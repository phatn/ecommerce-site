import {Customer} from "../../customers/shared/customer.model";
/**
 * Created by phatnguyen on 3/5/17.
 */

export class LoginResult {
    constructor(public customer: Customer,
                public jwtToken: string) {}
}