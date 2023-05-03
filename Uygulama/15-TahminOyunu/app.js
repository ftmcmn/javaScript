const baslat = document.querySelector("#baslat");
const yukari = document.querySelector("#yukari");
const asagi = document.querySelector("#asagi");
const bitir = document.querySelector("#bitir");
const mesaj = document.querySelector("#mesaj");

let hak = 1,
  altDeger = 1,
  ustDeger = 100,
  tahmin = 0;

baslat.addEventListener("click", () => {
  hak = 1;
  altDeger = 1;
  ustDeger = 100;

  baslat.disabled = true;
  yukari.disabled = false;
  asagi.disabled = false;
  bitir.disabled = false;

  sonucGoster(altDeger, ustDeger);
});

yukari.addEventListener("click", () => {
  hak++;
  altDeger = tahmin + 1;

  sonucGoster(altDeger, ustDeger);
});

asagi.addEventListener("click", () => {
  hak++;
  ustDeger = tahmin - 1;

  sonucGoster(altDeger, ustDeger);
});

bitir.addEventListener("click", () => {
  mesaj.innerHTML = `Bilgisayar Kazandı! <br><br> 
    <span style="color=red;">Bilgisayarın Tahmini: ${tahmin}</span>`;
  baslat.disabled = false;
  yukari.disabled = true;
  asagi.disabled = true;
  bitir.disabled = true;
});

const sonucGoster = (altDeger, ustDeger) => {
  tahmin = Math.floor(Math.random() * (ustDeger - altDeger + 1)) + altDeger;
  mesaj.innerHTML = `Bilgisayarın Tahmini: ${tahmin} <br><br> 
    <span style="color=red;">Kalan Hak: ${10 - hak}</span>`;
  if (hak == 10) {
    mesaj.innerHTML = `Siz Kazandınız! <br><br> 
            <span style="color=green;">Bilgisayarın Tahmini: ${tahmin}</span>`;
    baslat.disabled = false;
    yukari.disabled = true;
    asagi.disabled = true;
    bitir.disabled = true;
  }
};
