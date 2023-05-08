const input = document.querySelector("#search");

const search = () => {
  const value = input.value;

  const li = document.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    if (
      li[i].innerText.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
    ) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
};

input.addEventListener("keyup", search);
