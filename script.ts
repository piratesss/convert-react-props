const props = document.getElementById("props") as HTMLInputElement;
const result = document.getElementById("result") as HTMLElement;

props.addEventListener("input", function (event: Event) {
  const textAreaValue: string = props.value;

  const getPropsResult = (value: string): string => {
    const string: string = value;

    if (string.charAt(string.length - 1) !== ",") {
      const formattedString: string = string + ",";
      return handlePropsGeneration(formattedString);
    } else {
      return handlePropsGeneration(string);
    }
  };

  const handlePropsGeneration = (string: string): string => {
    const stringSplitByComma: string[] = string
      .split(",")
      .map((str) => str.trim());

    return stringSplitByComma
      .filter((str) => str.length !== 0)
      .map((str) => `${trimWhiteSpace(str)}={${trimWhiteSpace(str)}}`)
      .join("\n");
  };

  const trimWhiteSpace = (string: string): string => {
    return string.replace(/\s/g, "");
  };

  result.innerHTML = getPropsResult(textAreaValue.replace(/\n/g, ", "));
});
