let buton = document.querySelector("#button-addon2");

document.querySelector("#tck").addEventListener("input", (e) => {
  let deger = e.target.value;
  if (deger.length == 11) {
    buton.disabled = false;
    document.querySelector("#mesaj").innerHTML = "";
  } else {
    buton.disabled = true;
  }

  if (isNaN(deger)) {
    buton.disabled = true;
  }

  if (deger.length > 11) {
    document.querySelector("#mesaj").innerHTML =
      "Tc Kimlik Numarası 11 haneli olmalıdır.";
    document.querySelector("#mesaj").style.color = "red";
    buton.disabled = true;
  }
});
