export const isLastStringNotAComma = (string) => {
  return string.charAt(string.length - 1) !== ",";
};

export const trimWhiteSpace = (string) => {
  return string.replace(/\s/g, "");
};

export const handlePropsGeneration = (string, isClass) => {
  const stringSplitByComma = string.split(",").map((str) => str.trim());

  return stringSplitByComma
    .filter((str) => str.length !== 0)
    .map(
      (str) =>
        `${trimWhiteSpace(str)}={${
          isClass ? `this.${trimWhiteSpace(str)}` : trimWhiteSpace(str)
        }}`
    )
    .join("\n");
};

export const replaceLineBreakWithComma = (string) => {
  return string.replace(/\n/g, ", ");
};
