import {
  handlePropsGeneration,
  isLastStringNotAComma,
  replaceLineBreakWithComma,
} from "./utils.js";

const props = document.getElementById("props");
const result = document.getElementById("result");
const isClass = document.querySelector("input[name=isClass]");
let isClassComponent = false;

props.addEventListener("input", function () {
  const textAreaValue = props.value;

  const getPropsResult = (value) => {
    const string = value;

    if (isLastStringNotAComma(string)) {
      const formattedString = string + ",";
      return handlePropsGeneration(formattedString, isClassComponent);
    } else {
      return handlePropsGeneration(string, isClassComponent);
    }
  };

  result.innerHTML = getPropsResult(replaceLineBreakWithComma(textAreaValue));
});

isClass.addEventListener("change", function () {
  if (this.checked) {
    isClassComponent = true;
  } else {
    isClassComponent = false;
  }

  props.dispatchEvent(new Event("input"));
});
