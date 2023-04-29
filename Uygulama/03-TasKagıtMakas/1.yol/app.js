const bilgisayar = document.querySelector("#bilgisayar-secimi");
const kullanici = document.querySelector("#senin-secimin");
const sonuc = document.querySelector("#sonuc");
const buttons = document.querySelectorAll("button");

let seninSecimin = "";
let bilgisayarSecimi = "";

let sonuclar;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    seninSecimin = e.target.id;
    kullanici.innerHTML = seninSecimin;
    bilgisayarSecimiOlustur();
    sonucGetir();
  });
});

const bilgisayarSecimiOlustur = () => {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    bilgisayarSecimi = "tas";
  } else if (random === 2) {
    bilgisayarSecimi = "kagit";
  } else if (random === 3) {
    bilgisayarSecimi = "makas";
  }
  bilgisayar.innerHTML = bilgisayarSecimi;
};

const sonucGetir = () => {
  if (seninSecimin === bilgisayarSecimi) {
    sonuclar = "Berabere";
  } else if (seninSecimin === "tas" && bilgisayarSecimi === "kagit") {
    sonuclar = "Bilgisayar Kazandı";
  } else if (seninSecimin === "tas" && bilgisayarSecimi === "makas") {
    sonuclar = "Sen Kazandın";
  } else if (seninSecimin === "kagit" && bilgisayarSecimi === "tas") {
    sonuclar = "Sen Kazandın";
  } else if (seninSecimin === "kagit" && bilgisayarSecimi === "makas") {
    sonuclar = "Bilgisayar Kazandı";
  } else if (seninSecimin === "makas" && bilgisayarSecimi === "tas") {
    sonuclar = "Bilgisayar Kazandı";
  } else if (seninSecimin === "makas" && bilgisayarSecimi === "kagit") {
    sonuclar = "Sen Kazandın";
  }
  sonuc.innerHTML = sonuclar;
};
