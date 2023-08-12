import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
