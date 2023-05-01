const urunler = [
  { id: 1, ad: "Kalem", fiyat: 5 },
  { id: 2, ad: "Defter", fiyat: 10 },
  { id: 3, ad: "Silgi", fiyat: 2 },
  { id: 4, ad: "Kalemtraş", fiyat: 7 },
  { id: 5, ad: "Kitap", fiyat: 20 },
  { id: 6, ad: "Bant", fiyat: 3 },
  { id: 7, ad: "Kalemlik", fiyat: 15 },
  { id: 8, ad: "Çanta", fiyat: 50 },
];

const urunListesi = document.querySelector("#urun-listesi");

const urunYukle = () => {
  urunler.forEach((urun) => {
    urunListesi.innerHTML += `
        <tr>
            <td>${urun.id}</td>
            <td>${urun.ad}</td>
            <td>${urun.fiyat}</td>
        </tr>
        `;
  });

  let toplamTutar = urunler.reduce((toplam, urun) => toplam + urun.fiyat, 0);
  document.querySelector("#toplam-tutar").innerHTML = `<b>${toplamTutar}</b>`;
};

/* urunListesi.addEventListener("click", (e) => {
  let urunId = document.querySelector("#urun-listesi tr").innerHTML;
  document.querySelector(".card sticky-top").innerHTML = urunId;
});
 */
urunYukle();
