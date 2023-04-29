const isim = document.getElementById("validationCustom01").value;
const soyisim = document.getElementById("validationCustom02").value;

const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const rakamlar = "0123456789-_.";

let jwt = "";

const getRandom = () => {
  return (
    buyukHarfler[Math.floor(Math.random() * buyukHarfler.length)] +
    kucukHarfler[Math.floor(Math.random() * kucukHarfler.length)] +
    rakamlar[Math.floor(Math.random() * rakamlar.length)]
  );
};

const zaman = new Date(Date.now());
const tarih = zaman.getFullYear();
const milisn = zaman.getMilliseconds();

let sifreUret = () => {
  let sifre = "";
  for (let i = 0; i < 10; i++) {
    sifre += getRandom();
  }
  return sifre;
};

const jwtUret = () => {
  jwt += sifreUret();
  jwt += tarih;
  jwt += milisn;
  jwt += sifreUret();
  jwt += isim;
  jwt += soyisim;
  jwt += sifreUret();
  return jwt;
};

jwtUret();

console.log(jwt);
