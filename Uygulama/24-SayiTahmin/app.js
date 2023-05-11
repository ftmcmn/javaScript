let rastgeleSayi = Math.floor(Math.random() * 20 + 1);
let puanPc = 10;
let rekorPc = 0;

document.querySelector(".kontrol").addEventListener("click", () => {
  const tahmin = document.querySelector(".tahmin").value;

  if (tahmin == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayi;
    document.querySelector(".mesaj").textContent = "🎉Tebrikler Bildiniz";
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekor-skor").textContent = puanPc;
    }
  } else if (tahmin < rastgeleSayi) {
    if (puanPc > 1) {
      puanPc--;
      document.querySelector(".skor").innerHTML = puanPc;
      document.querySelector(".mesaj").textContent = "📈Arttır";
    } else {
      document.querySelector(".mesaj").textContent = "Oyunu Kaybettiniz";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (tahmin > rastgeleSayi) {
    if (puanPc > 1) {
      puanPc--;
      document.querySelector(".skor").innerText = puanPc;
      document.querySelector(".mesaj").textContent = "📉Azalt";
    } else {
      document.querySelector(".mesaj").textContent = "Oyunu Kaybettiniz";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".tekrar").addEventListener("click", () => {
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".mesaj").textContent = "Tahmine Başlanıyor";
  document.querySelector(".tahmin").value = "";
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
});
