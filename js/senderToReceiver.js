import { getSortedStrings } from "./utils.js";

const senderPropsField = document.getElementById("senderPropsField");
const receiverPropsDisabled = document.getElementById("receiverPropsDisabled");

senderPropsField.addEventListener("input", function () {
  const BRACKETED_EXPRESSION_REGEX = /(\w+)\s*=\s*{[^}]*}/g;

  const string = senderPropsField.value;

  const matches = [];

  let match;
  while ((match = BRACKETED_EXPRESSION_REGEX.exec(string)) !== null) {
    const extractedString = match[0].match(/{(.*?)}/)[1];

    if (
      match[1]?.trim() === extractedString.split(".")[1] ||
      match[1]?.trim() === extractedString?.trim()
    ) {
      matches.push(match[1]);
    }
  }

  const convertedValues = getSortedStrings(matches)
    ?.map((match) => match + ",")
    .join("\n");

  receiverPropsDisabled.innerHTML = convertedValues;
});

senderPropsField.dispatchEvent(new Event("input"));
