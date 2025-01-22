import { Uuuid, InvalidUuidError } from "../uuid.vo";
import { validate as uuidValidate } from "uuid";


describe("Uuid unit tests", () => {

    const validateSpy = jest.spyOn(Uuuid.prototype as any, 'validate');

    test("should throw error when uuid is invalid", () => {
        expect(() => {
            new Uuuid('invalid-uuid');
        }).toThrowError(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test("should create a new uuid", () => {
        const uuid = new Uuuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test("should accept a valid uuid", () => {
        const uuid = new Uuuid('f47ac10b-58cc-4372-a567-0e02b2c3d479');
        expect(uuid.id).toBe('f47ac10b-58cc-4372-a567-0e02b2c3d479');
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });
});
