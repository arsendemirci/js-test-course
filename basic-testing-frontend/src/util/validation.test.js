import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it(`should throw error if string is empty`, () => {
    const resFunc = () => {
      validateStringNotEmpty("");
    };
    expect(resFunc).toThrowError(/must not be empty/);
  });
  it(`should throw error if blank string is passed`, () => {
    const resFunc = () => {
      validateStringNotEmpty("   ");
    };

    expect(resFunc).toThrow(/must not be empty/);
  });
  it(`should return true if passed parameter is valid string`, () => {
    const str = "Arsen";
    const resultFunc = validateStringNotEmpty(str);
    expect(resultFunc).toBe(true);
  });
});
describe("validateNumber()", () => {
  it("should throw error if NaN is passed as parameter", () => {
    const resFunc = () => {
      validateNumber(NaN);
    };
    expect(resFunc).toThrowError();
  });
  it("should throw error if parameter is null", () => {
    const resFunc = () => {
      validateNumber(null);
    };
    expect(resFunc).toThrowError();
  });
  it("should throw error if parameter is undefined", () => {
    const resFunc = () => {
      validateNumber(undefined);
    };
    expect(resFunc).toThrowError();
  });
  it("should throw error if no parameter is passed", () => {
    const resFunc = () => {
      validateNumber();
    };
    expect(resFunc).toThrowError();
  });
  it(`should throw error if passed value is not a number`, () => {
    const resFunc = () => {
      validateNumber("asd");
    };
    expect(resFunc).toThrowError(/Invalid number/);
  });

  it(`should return true if passed parameter is valid number`, () => {
    const str = "32";
    const number = 123;
    const resultFunc = validateNumber(str);
    const resultFunc2 = validateNumber(number);

    expect(resultFunc).toBe(true);
    expect(resultFunc2).toBe(true);
  });
});
