/**
 * Created by phatnguyen on 3/18/17.
 */
export class Card {

    constructor(public holderName: string = "",
                public cardNumber: string = "",
                public expiryMonth: string = "",
                public expiryYear: string = "",
                public cvc: string = "") {}
}