const menu = document.querySelector(".menu");
const resim = document.querySelector(".resim img");

resim.addEventListener("mouseover", function () {
  menu.classList.add("active");
});

resim.addEventListener("mouseout", function () {
  menu.classList.remove("active");
});

menu.addEventListener("mouseover", function () {
  menu.classList.add("active");
});

menu.addEventListener("mouseout", function () {
  menu.classList.remove("active");
});
