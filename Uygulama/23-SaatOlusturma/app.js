let hour = document.querySelector("#hour");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");

let hourText = document.querySelector("#am-pm");

const updateDisplay = () => {
  let date = new Date();

  let hourValue = date.getHours();
  let minuteValue = date.getMinutes();
  let secondValue = date.getSeconds();

  hour.innerHTML =
    hourValue > 12
      ? (hourValue - 12).toString().padStart(2, "0")
      : hourValue.toString().padStart(2, "0");
  minute.innerHTML = minuteValue.toString().padStart(2, "0");
  second.innerHTML = secondValue.toString().padStart(2, "0");

  hourText.innerHTML = hourValue < 12 ? "AM" : "PM";

  setTimeout(updateDisplay, 1000);
};

updateDisplay();
