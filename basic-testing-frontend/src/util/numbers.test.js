import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
  it("should convert numeric value to number", () => {
    const num = "1";
    const result = transformToNumber(num);
    expect(result).toBe(1);
  });

  it("should return NaN if non-numeric value is passed", () => {
    const num = "kjshd";
    const result = transformToNumber(num);
    expect(result).toBeNaN();
  });
  it("should transform a string number to a number of type number", () => {
    const input = "1";
    const result = transformToNumber(input);
    expect(result).toBeTypeOf("number");
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const input = ["1", "2"];
    const result = cleanNumbers(input);
    expect(result[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one epty string is provided", () => {
    const input = ["1", "", "4"];
    const resultFunc = () => {
      cleanNumbers(input);
    };
    expect(resultFunc).toThrowError();
  });
});
