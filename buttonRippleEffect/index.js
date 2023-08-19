const btnEI = document.querySelector(".btn");

btnEI.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEI.offsetLeft;
  const y = event.pageY - btnEI.offsetTop;
  btnEI.style.setProperty("--xPos", x + "px");
  btnEI.style.setProperty("--yPos", y + "px");
});
