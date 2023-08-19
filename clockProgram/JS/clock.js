const hourEI = document.getElementById("hours"); // Fixed the typo in the element ID
const minutesEI = document.getElementById("minutes");
const secondsEI = document.getElementById("seconds");
const ampmEI = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEI.innerText = h < 10 ? "0" + h : h; // Adding leading zero if needed to keep the format cof the clock
  minutesEI.innerText = m < 10 ? "0" + m : m;
  secondsEI.innerText = s < 10 ? "0" + s : s;
  ampmEI.innerText = ampm; // Setting the innerText property of the ampmEI element to the value of ampm, which is "AM" or "PM" based on the logic.
}

updateClock();
