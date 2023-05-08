const sayilar = document.querySelector(".sayilar");
const sayiUret = document.querySelector("#sayiUret");
const gosterBtn = document.querySelector("#gosterBtn");
const goster = document.querySelector(".goster");

const sayilarDizisi = [];

sayiUret.addEventListener("click", () => {
  sayilar.classList.add("d-block");

  if (sayilarDizisi.length == 10) {
    sayiUret.disabled = true;
    gosterBtn.classList.remove("d-none");
    return;
  }
  let rasgeleSayi = Math.floor(Math.random() * 50 + 1);

  sayilar.textContent += rasgeleSayi + " ";
  sayilarDizisi.push(rasgeleSayi);
});

gosterBtn.addEventListener("click", () => {
  let max = sayilarDizisi.reduce((a, b) => Math.max(a, b));
  let min = sayilarDizisi.reduce((a, b) => Math.min(a, b));

  goster.innerHTML = `En büyük sayı: ${max} <br> En küçük sayı: ${min}`;
});
