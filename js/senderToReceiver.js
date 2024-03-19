const receiverPropsField = document.getElementById("receiverPropsField");
const senderPropsDisabled = document.getElementById("senderPropsDisabled");

receiverPropsField.addEventListener("input", function () {
  const BRACKETED_EXPRESSION_REGEX = /\{([^}]+)\}/g;

  const string = receiverPropsField.value;

  const matches = [];

  let match;
  while ((match = BRACKETED_EXPRESSION_REGEX.exec(string)) !== null) {
    matches.push(match[1]);
  }

  const convertedValues = matches?.map((match) => match + ",").join("\n");

  senderPropsDisabled.innerHTML = convertedValues;
});

receiverPropsField.dispatchEvent(new Event("input"));
