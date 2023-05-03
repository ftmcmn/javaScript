let count = 0;

const countValue = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText == "Arttır") {
      count++;
    } else if (e.target.innerText == "Azalt") {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      countValue.style.color = "green";
    }
    if (count < 0) {
      countValue.style.color = "red";
    }
    if (count == 0) {
      countValue.style.color = "black";
    }
    countValue.innerText = count;
  });
});
