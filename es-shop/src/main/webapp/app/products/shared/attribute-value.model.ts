/**
 * Created by phatnguyen on 1/15/17.
 */
import { Attribute } from './attribute.model';

export class AttributeValue {

    constructor(public id: number,
                public value: string,
                public attribute: Attribute) {}
}
