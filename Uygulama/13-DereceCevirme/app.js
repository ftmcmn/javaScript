function sicaklikHesaplama() {
  function toFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
  }

  function toCelsius(fahrenheit) {
    return Math.round(((fahrenheit - 32) * 5) / 9);
  }

  let tempSecim = document.getElementById("sayi-deger");

  let secimDeger = tempSecim.options[tempSecim.selectedIndex].value;

  let numberTemp = document.getElementById("deger").value;

  let sonuc;

  if (secimDeger == "1") {
    sonuc = toFahrenheit(numberTemp);
    document.getElementById("sonuc").innerHTML = sonuc + " F";
  } else {
    sonuc = toCelsius(numberTemp);
    document.getElementById("sonuc").innerHTML = sonuc + " C";
  }
}
