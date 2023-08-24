import { getFormInputs } from "./src/parser.js";
import { calculateResults } from "./src/math.js";
import { generateOutputResultText, outputResult } from "./src/output.js";
const form = document.querySelector("form");
const output = document.getElementById("result");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = getFormInputs(form);

  let result = calculateResults(numberInputs);
  const resultText = generateOutputResultText(result);

  outputResult(resultText, output);
}

form.addEventListener("submit", formSubmitHandler);
