const textaeraEI = document.getElementById("textarea");
const totalCounterEI = document.getElementById("total-counter");
const remainingCounterEI = document.getElementById("remaining-counter");

textaeraEI.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterEI.innerText = textaeraEI.value.length;
  remainingCounterEI.innerText =
    textaeraEI.getAttribute("maxlength") - textaeraEI.value.length;
}
