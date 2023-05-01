const basliklar = document.querySelector(".basliklar");
console.log(basliklar);
const urunlerResim = document.querySelectorAll(".image");

basliklar.addEventListener("click", (e) => {
  if (e.target.classList.contains("urun")) {
    basliklar.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const aranan = e.target.dataset.sec;

    urunlerResim.forEach((resim) => {
      if (aranan == "all" || resim.classList.contains(aranan)) {
        resim.style.display = "block";
      } else {
        resim.style.display = "none";
      }
    });
  }
});
