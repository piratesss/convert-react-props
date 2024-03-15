import {
  handlePropsGeneration,
  isLastStringNotAComma,
  replaceLineBreakWithComma,
} from "./utils.js";

const props = document.getElementById("props");
const result = document.getElementById("result");

props.addEventListener("input", function () {
  const textAreaValue = props.value;

  const getPropsResult = (value) => {
    const string = value;

    if (isLastStringNotAComma(string)) {
      const formattedString = string + ",";
      return handlePropsGeneration(formattedString);
    } else {
      return handlePropsGeneration(string);
    }
  };

  result.innerHTML = getPropsResult(replaceLineBreakWithComma(textAreaValue));
});
