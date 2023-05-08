document.addEventListener("DOMContentLoaded", () => {
  const liste = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pasta",
      img: "images/pasta.png",
    },
    {
      name: "waffle",
      img: "images/waffle.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pasta",
      img: "images/pasta.png",
    },
    {
      name: "waffle",
      img: "images/waffle.png",
    },
  ];

  liste.sort(() => 0.5 - Math.random());

  const containerEl = document.querySelector(".container");
  const sonucEl = document.querySelector("#sonuc");
  const mesaj = document.querySelector(".mesaj");

  let secilen = [];
  let secilenId = [];
  let kazanılan = [];

  const cevir = (e) => {
    let kartId = e.target.getAttribute("data-id");
    secilen.push(liste[kartId].name);
    secilenId.push(kartId);
    e.target.setAttribute("src", liste[kartId].img);
    if (secilen.length === 2) {
      setTimeout(kontrol, 500);
    }
  };

  const yerlestir = () => {
    for (let i = 0; i < liste.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", cevir);
      containerEl.appendChild(card);
    }
  };

  const kontrol = () => {
    const cards = document.querySelectorAll("img");
    const birinci = secilenId[0];
    const ikinci = secilenId[1];

    if (birinci === ikinci) {
      cards[birinci].setAttribute("src", "images/blank.png");
      cards[ikinci].setAttribute("src", "images/blank.png");
      mesaj.innerHTML = `<h3>Ayni seyi tikladiniz</h3>`;
    } else if (secilen[0] === secilen[1]) {
      mesaj.innerHTML = `<h3>Eslestiniz</h3>`;
      cards[birinci].setAttribute("src", "images/white.png");
      cards[ikinci].setAttribute("src", "images/white.png");
      cards[birinci].removeEventListener("click", cevir);
      cards[ikinci].removeEventListener("click", cevir);
      kazanılan.push(secilen);
    } else {
      cards[birinci].setAttribute("src", "images/blank.png");
      cards[ikinci].setAttribute("src", "images/blank.png");
      mesaj.innerHTML = `<h3>Eslesmediniz</h3>`;
    }

    secilen = [];
    secilenId = [];

    sonucEl.textContent = kazanılan.length;

    if (kazanılan.length === liste.length / 2) {
      sonucEl.textContent = "Tebrikler Kazandiniz";
    }
  };

  yerlestir();
});
