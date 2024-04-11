import {
  handlePropsGeneration,
  isLastStringNotAComma,
  replaceLineBreakWithComma,
} from "./utils.js";

const isClass = document.querySelector("input[name=isClass]");
const receiverPropsField = document.getElementById("receiverPropsField");
const senderPropsDisabled = document.getElementById("senderPropsDisabled");

let isClassComponent = false;

receiverPropsField.addEventListener("input", function () {
  const textAreaValue = receiverPropsField.value;

  const getPropsResult = (value) => {
    const string = value;

    if (isLastStringNotAComma(string)) {
      const formattedString = string + ",";
      return handlePropsGeneration(formattedString, isClassComponent);
    } else {
      return handlePropsGeneration(string, isClassComponent);
    }
  };

  senderPropsDisabled.innerHTML = getPropsResult(
    replaceLineBreakWithComma(textAreaValue)
  );
});

isClass.addEventListener("change", function () {
  if (this.checked) {
    isClassComponent = true;
  } else {
    isClassComponent = false;
  }

  receiverPropsField.dispatchEvent(new Event("input"));
});

receiverPropsField.dispatchEvent(new Event("input"));
