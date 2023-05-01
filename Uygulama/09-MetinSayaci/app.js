const sayac = document.querySelector(".sayac");
const girisBtn = document.querySelector("#giris");
const resetBtn = document.querySelector("#sil");
const mesaj = document.querySelector(".msj");

girisBtn.addEventListener("keyup", () => {
  mesaj.innerHTML = "";
  sayac.innerHTML = girisBtn.value.length;
});
girisBtn.addEventListener("click", () => {
  if (girisBtn.value.length == 0) {
    mesaj.innerHTML = "<b>Haydi Söyle</b>";
    mesaj.classList.add("kirmizi");
  } else {
    mesaj.classList.remove("kirmizi");
  }
});

resetBtn.addEventListener("click", () => {
  sayac.innerHTML = 0;
  mesaj.innerHTML = "";
});

setTimeout(() => {
  if (girisBtn.value) return;

  mesaj.innerHTML = "<b>Haydi Söyle</b>";
}, 3000);
