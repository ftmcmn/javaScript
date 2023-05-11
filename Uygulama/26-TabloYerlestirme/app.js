const bilgiler = [
  { isim: "Fatma", yas: 25, maas: 5000 },
  { isim: "Ayşe", yas: 30, maas: 6000 },
  { isim: "Ali", yas: 35, maas: 7000 },
  { isim: "Veli", yas: 40, maas: 8000 },
  { isim: "Mehmet", yas: 45, maas: 9000 },
  { isim: "Ahmet", yas: 50, maas: 10000 },
  { isim: "Ayşe", yas: 55, maas: 11000 },
  { isim: "Faruk", yas: 60, maas: 12000 },
  { isim: "Zeynep", yas: 65, maas: 13000 },
  { isim: "Emre", yas: 70, maas: 14000 },
  { isim: "Merve", yas: 75, maas: 15000 },
];

let satir = "";

for (bilgi of bilgiler) {
  satir += `
    <tr>
        <td>${bilgi.isim}</td>
        <td>${bilgi.yas}</td>
        <td>${bilgi.maas}</td>
        </tr>`;
}

document.querySelector("#liste tbody").innerHTML = satir;

const satirlar = document.querySelectorAll("#liste tbody tr");

for (satir of satirlar) {
  const maas = Number(satir.cells[2].textContent);
  if (maas > 5000) {
    satir.classList.add("bg-success");
  }
}

const ortalama = Math.round(
  bilgiler.reduce((toplam, bilgi) => toplam + bilgi.maas, 0) / bilgiler.length
);

const ortalamaSatir = document.createElement("div");
ortalamaSatir.innerHTML = `Ortalama Maaş: ${ortalama}`;
ortalamaSatir.setAttribute("class", "card bg-warning text-center");

document.querySelector("#liste").appendChild(ortalamaSatir);

const baslik = document.createElement("h2");
baslik.innerHTML = "Personel Listesi";
baslik.setAttribute("class", "text-center");
document.querySelector(".container").prepend(baslik);

const mesaj = document.createElement("h1");
mesaj.innerHTML = "İyi Çalışmalar";
mesaj.setAttribute("class", "card bg-primary text-center text-white");

const buton = document.querySelector("#btn");
buton.addEventListener("click", function (e) {
  document.querySelector("#liste").remove();
  e.target.style.visibility = "hidden";
  document.querySelector(".container").append(mesaj);
});
