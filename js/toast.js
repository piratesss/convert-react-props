const btn_copies = document.querySelectorAll(".btn_copy");

let toastContainer;

function generateToast({
  message,
  background = "#00214d",
  color = "#fffffe",
  length = "3000ms",
}) {
  console.log("here");
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `<p class="toast" 
    style="background-color: ${background};
    color: ${color};
    animation-duration: ${length}">
    <span style="border-left: 4px solid #77dd77; padding-left: 8px;">${message}</span>
  </p>`
  );
  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
}

(function initToast() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="toast-container"></div>
  <style>
  
.toast-container {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  display: grid;
  justify-items: end;
  gap: 1.5rem;
}

.toast {
  font-size: 15.5px;
  font-weight: 500;
  line-height: 1;
  background-color: white;
  animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 16px 22px;
}

@keyframes toastIt {
  0%,
  100% {
    transform: translateY(-150%);
    opacity: 0;
  }
  10%,
  90% {
    transform: translateY(0);
    opacity: 1;
  }
}
  </style>
  `
  );
  toastContainer = document.querySelector(".toast-container");
})();

btn_copies.forEach((btn_copy) => {
  btn_copy.addEventListener("click", (e) => {
    generateToast({
      message: e.currentTarget.dataset.message,
      background: "#fff",
      color: "grey",
      length: "5000ms",
    });
  });
});
