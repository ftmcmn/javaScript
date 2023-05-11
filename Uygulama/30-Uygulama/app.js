const cumleler = ["Merhaba", "Nasılsın", "İyi misin", "İyiyim", "Teşekkürler"];

const yazim = document.querySelector(".cumleler");

let cumleIndex = 0;
let harfIndex = 0;

const yaziYerlestir = () => {
  if (harfIndex < cumleler[cumleIndex].length) {
    yazim.textContent += cumleler[cumleIndex].charAt(harfIndex);
    harfIndex++;
    setTimeout(yaziYerlestir, 200);
  } else {
    setTimeout(yaziSil, 200);
  }
};

const yaziSil = () => {
  if (harfIndex >= 0) {
    yazim.textContent = yazim.textContent.slice(0, harfIndex);
    harfIndex--;
    setTimeout(yaziSil, 200);
  } else {
    cumleIndex++;
    if (cumleIndex >= cumleler.length) {
      cumleIndex = 0;
    }
    setTimeout(yaziYerlestir, 200);
  }
};

yaziYerlestir();
