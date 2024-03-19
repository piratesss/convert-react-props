import {
  handlePropsGeneration,
  isLastStringNotAComma,
  replaceLineBreakWithComma,
} from "./utils.js";

const receiverProps = document.getElementById("receiverProps");
const senderProps = document.getElementById("senderProps");
const isClass = document.querySelector("input[name=isClass]");

let isClassComponent = false;

receiverProps.addEventListener("input", function () {
  const textAreaValue = receiverProps.value;

  const getPropsResult = (value) => {
    const string = value;

    if (isLastStringNotAComma(string)) {
      const formattedString = string + ",";
      return handlePropsGeneration(formattedString, isClassComponent);
    } else {
      return handlePropsGeneration(string, isClassComponent);
    }
  };

  senderProps.innerHTML = getPropsResult(
    replaceLineBreakWithComma(textAreaValue)
  );
});

isClass.addEventListener("change", function () {
  if (this.checked) {
    isClassComponent = true;
  } else {
    isClassComponent = false;
  }

  receiverProps.dispatchEvent(new Event("input"));
});

receiverProps.dispatchEvent(new Event("input"));
