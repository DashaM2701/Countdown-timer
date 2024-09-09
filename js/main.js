const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

// Делаем расчеты
// const targetDate = new Date('2024-09-10');
const currendYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currendYear + 1} 00:00:00`);

// Устанавливаем год на страницу
function updateCounter() {
  const currentTime = new Date();
  year.innerText = currendYear + 1;
  const diff = nextYear - currentTime;

  //Перевод в дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

  //Перевод в часы

  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

  //Перевод в минуты
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

  //Перевод в секунды
  const secondsLeft = Math.floor(diff / 1000) % 60;

  console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

  days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}
updateCounter();

setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);
