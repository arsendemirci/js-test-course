import { it, expect, describe } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText", () => {
  it(`should return 'ResultText: [result]' when the result is valid`, () => {
    const resultNumber = 14;
    const resultText = generateResultText(resultNumber);
    expect(resultText).toContain(resultNumber.toString());
  });
  it(`should return 'Invalid number' when the result is invalid`, () => {
    const result = "invalid";
    const resultText = generateResultText(result);
    expect(resultText).toContain("Invalid input");
  });
  it(`should return empty when the result is no-calc`, () => {
    const result = "no-calc";
    const resultText = generateResultText(result);
    expect(resultText).toBe("");
  });
});
