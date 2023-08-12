export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
  return true;
}

export function validateNumber(number) {
  if (!number || isNaN(number)) {
    throw new Error("Invalid number input.");
  }
  return true;
}
