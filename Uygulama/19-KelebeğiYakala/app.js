const kareler = document.querySelectorAll(".kare");
const resim = document.querySelector(".resim");
const kalanZaman = document.querySelector("#kalan-zaman");
const score = document.querySelector("#score");
const mesaj = document.querySelector(".mesaj");

let sonuc = 0;
let zaman = 20;
let konum;

const rastgeleKare = () => {
  kareler.forEach((kare) => {
    kare.classList.remove("resim");
  });
  let randomKare = kareler[Math.floor(Math.random() * 9)];
  randomKare.classList.add("resim");
  konum = randomKare.id;
};
rastgeleKare();

kareler.forEach((kare) => {
  kare.addEventListener("mousedown", () => {
    if (kare.id === konum) {
      sonuc++;
      score.textContent = sonuc;
      konum = null;
    }
  });
});

const resimHareketi = () => {
  timerId = setInterval(rastgeleKare, 500);
};

resimHareketi();

const geriSayim = () => {
  zaman--;
  kalanZaman.textContent = zaman;
  if (zaman === 0) {
    clearInterval(geriSayimTimer);
    clearInterval(timerId);
    mesaj.innerHTML = `Oyun Bitti. Skorunuz: ${sonuc}`;
    kareler.forEach((kare) => {
      kare.classList.remove("resim");
    });
  }
};
let geriSayimTimer = setInterval(geriSayim, 1000);
