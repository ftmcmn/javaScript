const gun = document.querySelector("#gun");
const saat = document.querySelector("#saat");
const dakika = document.querySelector("#dakika");
const saniye = document.querySelector("#saniye");

const yeniYil = "1 Jan 2024";

const geriSayim = () => {
  const yeniYilGunu = new Date(yeniYil);
  console.log(yeniYilGunu);
  const simdikiGunu = new Date();
  console.log(simdikiGunu);

  const toplamSaniye = (yeniYilGunu - simdikiGunu) / 1000;

  console.log(toplamSaniye);

  const gunler = Math.floor(toplamSaniye / 3600 / 24);
  const saatler = Math.floor(toplamSaniye / 3600) % 24;
  const dakikalar = Math.floor(toplamSaniye / 60) % 60;
  const saniyeler = Math.floor(toplamSaniye) % 60;

  gun.innerHTML = gunler;
  saat.innerHTML = saatler;
  dakika.innerHTML = dakikalar;
  saniye.innerHTML = saniyeler;
};

geriSayim();

setInterval(geriSayim, 1000);
