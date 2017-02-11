import {AttributeDescription} from "./attribute-description";
/**
 * Created by phatnguyen on 1/15/17.
 */
export class Attribute {

    constructor(public id: number,
                public descriptions: AttributeDescription[],
                public sortOrder: number) {}
}