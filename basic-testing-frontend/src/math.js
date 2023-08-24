import { cleanNumbers } from "./src/util/numbers.js";
export function add(numbers) {
  if (!numbers) throw "numbers is not defined";
  if (numbers === NaN) return NaN;
  if (!isNaN(numbers)) return +numbers;
  // if (!Array.isArray(numbers)) throw "numbers is not a valid parameter";

  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResults(numberInputs) {
  try {
    const numbers = cleanNumbers(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
