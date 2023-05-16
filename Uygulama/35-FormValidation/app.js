const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const button = document.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  dogrulama();
});

const hataMesaji = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const basariMesaji = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = message;
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const mailTest = () => {
  const regEx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
  return regEx.test(String(email).toLowerCase());
};

const dogrulama = () => {
  if (username.value === "") {
    hataMesaji(username, "Kullanıcı adı boş bırakılamaz");
  } else {
    basariMesaji(username, "Kullanıcı adı doğrulandı");
  }
  if (email.value === "") {
    hataMesaji(email, "Email boş bırakılamaz");
  } else if (!mailTest()) {
    hataMesaji(email, "Geçerli bir email adresi giriniz");
  } else {
    basariMesaji(email, "Email doğrulandı");
  }
  if (password.value === "") {
    hataMesaji(password, "Şifre boş bırakılamaz");
  } else {
    basariMesaji(password, "Şifre doğrulandı");
  }
  if (password2.value === "") {
    hataMesaji(password2, "Şifre tekrarı boş bırakılamaz");
  } else if (password.value !== password2.value) {
    hataMesaji(password2, "Şifreler eşleşmiyor");
  } else {
    basariMesaji(password2, "Şifre tekrarı doğrulandı");
  }
};
