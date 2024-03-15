var props = document.getElementById("props");
var result = document.getElementById("result");
props.addEventListener("input", function (event) {
    var textAreaValue = props.value;
    var getPropsResult = function (value) {
        var string = value;
        if (string.charAt(string.length - 1) !== ",") {
            var formattedString = string + ",";
            return handlePropsGeneration(formattedString);
        }
        else {
            return handlePropsGeneration(string);
        }
    };
    var handlePropsGeneration = function (string) {
        var stringSplitByComma = string
            .split(",")
            .map(function (str) { return str.trim(); });
        return stringSplitByComma
            .filter(function (str) { return str.length !== 0; })
            .map(function (str) { return "".concat(trimWhiteSpace(str), "={").concat(trimWhiteSpace(str), "}"); })
            .join("\n");
    };
    var trimWhiteSpace = function (string) {
        return string.replace(/\s/g, "");
    };
    result.innerHTML = getPropsResult(textAreaValue.replace(/\n/g, ", "));
});
