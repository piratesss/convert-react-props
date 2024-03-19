const copyTextToClipboard = (text) => {
  try {
    return navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text to clipboard:", err);
  }
};

const copySenderProps = document.getElementById("copySenderProps");
const copyReceiverProps = document.getElementById("copyReceiverProps");

copySenderProps.addEventListener("click", async () => {
  console.log("klickk one");

  const senderProps = document.getElementById("senderProps");
  await copyTextToClipboard(senderProps.value);
});

copyReceiverProps.addEventListener("click", async () => {
  console.log("klickk 2");
  const senderPropsDisabled = document.getElementById("senderPropsDisabled");
  await copyTextToClipboard(senderPropsDisabled.value);
});
