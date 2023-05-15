const container = document.querySelector(".container");
const select = document.querySelector("#movie");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
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
  const selectedSeatsCount = selectedSeats.length;
  const selectedSeatsIndex = [...selectedSeats].map((seat) =>
    [...seats].indexOf(seat)
  );
  count.innerText = selectedSeatsCount;
  amount.innerText = selectedSeatsCount * select.value;
  kaydet(selectedSeatsIndex);
}

function kaydet(seatIndex) {
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
}
