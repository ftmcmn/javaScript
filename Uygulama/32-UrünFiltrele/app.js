let filteredProducts = [...products];

const urunler = document.querySelector(".urunler");
const form = document.querySelector("form");
const arama = document.querySelector("input");
const markaEl = document.querySelector(".markalar");

const urunTerlestir = () => {
  if (filteredProducts.length < 1) {
    urunler.innerHTML = `<h3 class="filtreleme">Aradığınız Ürün Bulunamadı</h3>`;
    return;
  }
  urunler.innerHTML = filteredProducts
    .map((urun) => {
      return `
    <article class="urun" data-id="${urun.id}">
    <img src="${urun.image}" alt="${urun.title}" />
    <footer>
        <h5 class="isim" >${urun.title}</h5>
        <span class="fiyat" >$${urun.price}</span>
    </footer>
    </article>`;
    })
    .join("");
};

urunTerlestir();

const butonYerlestir = () => {
  const buttons = ["all", ...new Set(products.map((urun) => urun.company))];

  markaEl.innerHTML = buttons
    .map((company) => {
      return `<button class="btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};

butonYerlestir();

markaEl.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(
        (urun) => urun.company === el.dataset.id
      );
    }
    urunTerlestir();
  }
});

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const deger = arama.value.toUpperCase();
  const filtre = products.filter((urun) => {
    return urun.title.toUpperCase().startsWith(deger);
  });
  filteredProducts = filtre;
  urunTerlestir();
});
