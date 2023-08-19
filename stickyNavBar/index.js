const navbarEI = document.querySelector(".navbar");

const bottomContainerEI = document.querySelector(".bottom-container");

console.log(bottomContainerEI.offsetTop);
console.log(navbarEI.offsetHeight);


window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEI.offsetTop- navbarEI.offsetHeight - 50) {
    navbarEI.classList.add("active");
  } else {
    navbarEI.classList.remove("active");
  }
});
