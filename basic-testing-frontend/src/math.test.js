import { it, expect, test } from "vitest";
import { add } from "./math";
const data = [1, 2, 3];
const result = add(data);

it("should summarize all number values in an array", () => {
  expect(result).toBe(6);
});
it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = [1, "invalid", 2];
  const result = add(inputs);
  expect(result).toBeNaN();
});
it("should yield NaN if a non-Array invalid number is provided", () => {
  const inputs = "adsd";
  const result = add(inputs);
  expect(result).toBeNaN();
});
it("should yield correct sum if an array of numeric string values is provided", () => {
  const inputs = ["1", "2", "3"];
  const result = add(inputs);
  expect(result).toBe(6);
});

it("should return itself when called with a non-Array number parameter", () => {
  const input1 = 2;
  const result1 = add(input1);
  expect(result1).toBe(2);
});
it("should return itself when called with a non-Array numeric string parameter", () => {
  const input2 = "2";
  const result2 = add(input2);
  expect(result2).toBe(2);
});
it("should throw an error if parameter is null or undefined", () => {
  const testFunc = () => {
    add();
  };
  expect(testFunc).toThrow(/is not defined/);
});
it("should return 0 if empty array is passed into the function", () => {
  const result = add([]);
  expect(result).toBe(0);
});
it("should throw an error if uniterable invalid parameter is passed", () => {
  const testFunc2 = () => {
    add({});
  };
  expect(testFunc2).toThrow(/is not iterable/);
});
