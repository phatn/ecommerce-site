/**
 * Created by phatnguyen on 3/18/17.
 */
export  class ChargeInfo {
    constructor(public token: string,
                public amount: number,
                public currency: string,
                public description: string) {}
}