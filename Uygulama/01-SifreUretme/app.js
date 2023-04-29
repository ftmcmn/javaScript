const ekranEl = document.getElementById("ekran");
const sifreEl = document.getElementById("sifre");
const uretEl = document.querySelector(".uret");
const upperEl = documet.querySelector("#buyuk");
const lowerEl = documet.getElementById("kucuk");
const numberEl = documet.getElementById("rakam");
const symbolEl = documet.getElementById("karakter");

const rakamlar = "0123456789";
const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const semboller = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

const kucukHarfUret = () => {
  return kucukHarfler[Math.floor(Math.random() * kucukHarfler.length)];
};

const buyukHarfUret = () => {
  return buyukHarfler[Math.floor(Math.random() * buyukHarfler.length)];
};

const rakamUret = () => {
  return rakamlar[Math.floor(Math.random() * rakamlar.length)];
};

const sembolUret = () => {
  return semboller[Math.floor(Math.random() * semboller.length)];
};

const sifreUret = () => {
  const len = sifreEl.value;
  let sifre = "";
  if (upperEl.checked) {
    sifre += buyukHarfUret();
  }
  if (lowerEl.checked) {
    sifre += kucukHarfUret();
  }
  if (numberEl.checked) {
    sifre += rakamUret();
  }
  if (symbolEl.checked) {
    sifre += sembolUret();
  }

  for (let i = sifre.length; i < len; i++) {
    let x = tamamla();
    sifre += x;
  }

  ekranEl.innerText = sifre;
};

const tamamla = () => {
  let ekle = [];
  if (upperEl.checked) {
    ekle.push(buyukHarfUret());
  }
  if (lowerEl.checked) {
    ekle.push(kucukHarfUret());
  }
  if (numberEl.checked) {
    ekle.push(rakamUret());
  }
  if (symbolEl.checked) {
    ekle.push(sembolUret());
  }

  if (ekle.length === 0) return "";

  return ekle[Math.floor(Math.random() * ekle.length)];
};

uretEl.addEventListener("click", sifreUret);
