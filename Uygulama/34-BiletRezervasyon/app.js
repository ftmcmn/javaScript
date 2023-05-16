const container = document.querySelector(".container");
const select = document.querySelector("#movie");
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

select.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const reservedSeats = document.querySelectorAll(".seat.reserved");
  const selectedSeatsCount = selectedSeats.length;
  const selectedSeatsIndex = [...selectedSeats].map((seat) =>
    [...seats].indexOf(seat)
  );
  count.textContent = selectedSeatsCount;
  amount.textContent = selectedSeatsCount * select.value;
  kaydet(selectedSeatsIndex);
}

function kaydet(seatIndex) {
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
  localStorage.setItem("reservedSeats", "[]");
}

function getir() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    select.selectedIndex = selectedMovieIndex;
  }

  const reservedSeats = localStorage.getItem("reservedSeats");

  seats.addEventListener("onunload", function (e) {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("reserved")
    ) {
      e.target.classList.toggle("reserved");
      calculateTotal();
    }
  });

  calculateTotal();
}

getir();
