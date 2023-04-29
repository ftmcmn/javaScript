const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");

const choices = ["Taş", "Kağıt", "Makas"];

const handleClick = (e) => {
  getResult(
    e.target.innerText,
    choices[Math.floor(Math.random() * choices.length)]
  );
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerText = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResult = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "TaşMakas":
    case "KağıtTaş":
    case "MakasKağıt":
      resultDisplay.innerText = "Sen kazandın!";
      break;
    case "MakasTaş":
    case "TaşKağıt":
    case "KağıtMakas":
      resultDisplay.innerText = "Bilgisayar kazandı!";
      break;
    case "TaşTaş":
    case "KağıtKağıt":
    case "MakasMakas":
      resultDisplay.innerText = "Berabere!";
      break;
  }
};
