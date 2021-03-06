const nameForm = document.querySelector(".js-nameForm");
const nameInput = nameForm.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const todo = document.querySelector(".js-todo");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  todo.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();