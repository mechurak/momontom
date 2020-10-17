const API_KEY = "19824d16e16afd42ba6726369cbcc098";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".js-weather");
const weatherSpan = weather.querySelector("span");

const COORDS = 'COORDS';

function getWeather(coords) {
  fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      const name = json.name;
      const temperature = json.main.temp;
      weatherSpan.innerHTML = `${Math.floor(temperature)}° @ ${name}`;
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng
  };
  localStorage.setItem(COORDS, JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("no location");
}

function loadWeather() {
  const currentCoords = localStorage.getItem(COORDS);
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}

function init() {
  loadWeather();
}

init();