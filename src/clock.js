const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const hourStr = `${hours < 10 ? `0${hours}` : hours}`;
  const minuteStr = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const secondStr = `${seconds < 10 ? `0${seconds}` : seconds}`;
  clockTitle.innerText = `${hourStr}:${minuteStr}:${secondStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();