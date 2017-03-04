import {Country} from "./country";
/**
 * Created by phatnguyen on 3/4/17.
 */
export class Delivery {
    constructor(public firstName: string ="",
                public lastName: string = "",
                public company: string = "",
                public street: string = "",
                public city: string = "",
                public zip: string = "",
                public state: string = "",
                public countryId: number = -1,
                public phone: string = "",
                public email: string= "") {}
}