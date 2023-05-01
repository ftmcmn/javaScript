const notlar = ["Kitap oku", "Kod yaz", "Spor yap", "Yemek yap", "Film izle"];

const liste = document.querySelector("#liste");
const ekle = document.querySelector("#ekle");
const sil = document.querySelector("#sil");

let satır = "";

for (let not of notlar) {
  satır += `<li>${not}</li>`;
}

liste.innerHTML = satır;

let veri = document.querySelector("#yeni");

ekle.addEventListener("click", () => {
  if (veri.value.length == 0) {
    veri.focus();
    alert("Lütfen bir not giriniz.");
    return;
  }
  notlar.push(veri.value);
  liste.innerHTML += `<li>${veri.value}</li>`;
  veri.value = "";
  document.querySelector(".card").innerHTML = notlar;
});

sil.addEventListener("click", () => {
  if (notlar.length == 0) {
    alert("Silinecek not kalmadı.");
    return;
  }
  notlar.pop();
  satır = "";
  for (let not of notlar) {
    satır += `<li>${not}</li>`;
  }
  liste.innerHTML = satır;
  document.querySelector(".card").innerHTML = notlar;
});
