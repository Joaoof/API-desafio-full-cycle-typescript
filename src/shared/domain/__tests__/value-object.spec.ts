import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}


class ComplexValueObject extends ValueObject {
    constructor(readonly value1: string, readonly value2: number) {
        super();
    }
}

describe("Value Object", () => {
    test("should be equals", () => {
        const value1 = new StringValueObject("value");
        const value2 = new StringValueObject("value");

        expect(value1.equals(value2)).toBeTruthy();

        const value3 = new ComplexValueObject("value", 1);
        const value4 = new ComplexValueObject("value", 1);
        expect(value3.equals(value4)).toBeTruthy();
    });

    test("should not be equals", () => {
        const value1 = new StringValueObject("value");
        const value2 = new StringValueObject("value2");

        expect(value1.equals(value2)).toBeFalsy();
        expect(value1.equals(null as any)).toBeFalsy();

        const value3 = new ComplexValueObject("value", 1);
        const value4 = new ComplexValueObject("value", 2);
        expect(value3.equals(value4)).toBeFalsy();
        expect(value3.equals(null as any)).toBeFalsy();
        expect(value4.equals(undefined as any)).toBeFalsy();
    });
});