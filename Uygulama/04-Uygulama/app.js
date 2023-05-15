const bilgiler = [
  {
    id: 1,
    isim: "Fatma",
    tarih: "12.12.2012",
    resim: (document.getElementById("resim").src = "./img/resim1.jpg"),
    metin: "Lorem ipsum dolor sit amet consectetur fatma",
  },
  {
    id: 2,
    isim: "Mehmet",
    tarih: "12.12.2012",
    resim: (document.getElementById("resim").src = "./img/resim2.jpg"),
    metin: "Lorem ipsum dolor sit amet consectetur mehmet",
  },
  {
    id: 3,
    isim: "Ayşe",
    tarih: "12.12.2012",
    resim: (document.getElementById("resim").src = "./img/resim3.jpg"),
    metin: "Lorem ipsum dolor sit amet consectetur ayşe",
  },
  {
    id: 4,
    isim: "Ahmet",
    tarih: "12.12.2012",
    resim: (document.getElementById("resim").src = "./img/resim4.jpg"),
    metin: "Lorem ipsum dolor sit amet consectetur ahmet",
  },
  {
    id: 5,
    isim: "Ali",
    tarih: "12.12.2012",
    resim: (document.getElementById("resim").src = "./img/resim5.jpg"),
    metin: "Lorem ipsum dolor sit amet consectetur ali",
  },
];

let indexNo = 0;

window.addEventListener("DOMContentLoaded", () => {
  sairGetir(indexNo);

  document.querySelector("#onceki").addEventListener("click", () => {
    indexNo--;
    if (indexNo < 0) {
      indexNo = bilgiler.length - 1;
    }
    sairGetir(indexNo);
  });

  document.querySelector("#sonraki").addEventListener("click", () => {
    indexNo++;
    if (indexNo > bilgiler.length - 1) {
      indexNo = 0;
    }
    sairGetir(indexNo);
  });

  document.querySelector("#random").addEventListener("click", () => {
    indexNo = Math.floor(Math.random() * bilgiler.length);
    sairGetir(indexNo);
  });
});

function sairGetir(indexNo) {
  const item = bilgiler[indexNo];

  resim.src = item.resim;
  sair.textContent = item.isim;
  tarih.textContent = item.tarih;
  siir.textContent = item.metin;
}

let giris = localStorage.getItem("counter");

giris = giris ? ++giris : 1;
console.log(giris);

localStorage.setItem("counter", giris);
const arkaplan = document.querySelector(".container");
switch (true) {
  case giris % 3 === 0:
    arkaplan.style.background = "red";
    break;
  case giris % 3 === 1:
    arkaplan.style.background = "blue";
    break;
  case giris % 3 === 2:
    arkaplan.style.background = "green";
    break;
}
