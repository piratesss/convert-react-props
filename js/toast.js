const btn_copies = document.querySelectorAll(".btn_copy");
const senderPropsDisabled = document.getElementById("senderPropsDisabled");
const receiverPropsDisabled = document.getElementById("receiverPropsDisabled");

let toastContainer;

function generateToast({
  message,
  background = background,
  color = color,
  length = length,
  type = type,
}) {
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `<p class="toast" 
    style="background-color: ${background};
    color: ${color};
    animation-duration: ${length}">
    <span style="border-left: ${
      type !== "ERROR" ? "4px solid #77dd77" : "4px solid #ff6961"
    }; padding-left: 8px;">${message}</span>
  </p>`
  );
  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
}

(function initToast() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="toast-container"></div>`
  );
  toastContainer = document.querySelector(".toast-container");
})();

btn_copies.forEach((btn_copy) => {
  btn_copy.addEventListener("click", (e) => {
    if (
      (e.target.id === "copySenderProps" &&
        senderPropsDisabled.value.length === 0) ||
      (e.target.id === "copyReceiverProps" &&
        receiverPropsDisabled.value.length === 0)
    ) {
      generateToast({
        message: "Nothing to copy",
        background: "white",
        color: "#ff6961",
        length: "5000ms",
        type: "ERROR",
      });
    } else {
      generateToast({
        message: "Text copied successfully",
        background: "#fff",
        color: "grey",
        length: "5000ms",
        type: "SUCCESS",
      });
    }
  });
});
