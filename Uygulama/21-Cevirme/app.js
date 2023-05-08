document.querySelector("#textbox").addEventListener("input", () => {
  const checkbox = document.querySelector("#checkbox");
  const textbox = document.querySelector("#textbox");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      textbox.value = textbox.value.toUpperCase();
    } else {
      textbox.value = textbox.value.toLowerCase();
    }
  });
});
