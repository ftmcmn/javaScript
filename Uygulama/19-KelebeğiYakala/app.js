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
  let index = Math.floor(Math.random() * 9);
  konum = kareler[index];
  konum.classList.add("resim");
};

const oyunBitti = () => {
  clearInterval(zamanlayici);
  mesaj.innerHTML = "Oyun Bitti";
  kareler.forEach((kare) => {
    kare.classList.remove("resim");
  });
};

const zamanlayici = setInterval(() => {
  zaman--;
  kalanZaman.innerHTML = zaman;
  if (zaman === 0) {
    oyunBitti();
  }
}, 1000);

rastgeleKare();

kareler.forEach((kare) => {
  kare.addEventListener("", () => {
    if (kare === konum) {
      sonuc++;
      score.innerHTML = sonuc;
      rastgeleKare();
    } else {
      sonuc--;
      score.innerHTML = sonuc;
    }
  });
});
