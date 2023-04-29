const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplay = document.createElement("h2");

const gameDisplay = document.getElementById("game");

gameDisplay.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["Taş", "Kağıt", "Makas"];

let seninSecimin = "";
let bilgisayarinSecimi = "";

const handleClick = (e) => {
  seninSecimin = e.target.id;
  userChoiceDisplay.innerText = `Senin seçimin: ${seninSecimin}`;
  bilgisayarinSecimi = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerText = `Bilgisayarın seçimi: ${bilgisayarinSecimi}`;
  sonucuGoster();
};

const sonucuGoster = () => {
  switch (seninSecimin + bilgisayarinSecimi) {
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

const buttonOlustur = () => {
  for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button");
    button.id = choices[i];
    button.innerText = choices[i];

    button.addEventListener("click", handleClick);

    gameDisplay.appendChild(button);
  }
};

buttonOlustur();
