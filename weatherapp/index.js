//16eb148a0cf235ab7de3fd1dc5a5d80f

const apikey = "16eb148a0cf235ab7de3fd1dc5a5d80f";
const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city-input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  // fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //     console.log(data);
  //     const { name } = data;
  //     const { temp } = data.main;
  //     const { description, icon } = data.weather[0];
  //     weatherData.innerHTML = `
  //         <div class="weather-data">
  //             <h2 class="city-name" data-name="${name}">${name}</h2>
  //             <div class="temp">${Math.round(temp)}°C</div>
  //             <div class="description">${description}</div>
  //             <div class="icon"><img src="https://openweathermap.org/img/wn/${icon}.png"></div>
  //         </div>
  // `;
  // });
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
        `Feels like: ${Math.round(data.main.feels_like)}°C`,
        `Humidity: ${data.main.humidity}%`,
        `Wind speed: ${data.wind.speed} km/h`,
    ]

    // weatherData.querySelector(".city-name").innerText = city;
    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").textContent = description;
    weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png">`;
     weatherData.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");

  } catch (error) {
    weatherData.querySelector(".temperature").textContent = "";

    weatherData.querySelector(".description").textContent = "An error has occured, please try again later";

    weatherData.querySelector(".icon").innerHTML = "";

     weatherData.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    
  }
}
