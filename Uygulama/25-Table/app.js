document.querySelector("#btnAdd").addEventListener("click", () => {
  const name = document.querySelector("#txtName").value;
  const point = document.querySelector("#txtPoint").value;

  if (!name || !point || isNaN(point)) {
    alert("Lütfen tüm alanları doldurunuz!");
    return;
  }

  const row = createRow(name, point);

  document.querySelector("#tblList tbody").prepend(row);
  deleteInputs();
  updateTableIndexes();
  updateAverage();
  setTable();
});

const getRowHtml = (name, point) => {
  return `
    <td>1</td>
    <td>${name}</td>
    <td>${point}</td>
    <td>
         <span class="btn-group-primary">
                 <button class="btn btn-link btn-del" ><i class="fa-solid fa-trash "></i></button>
                 <button class="btn btn-link btn-edit" ><i class="fa-solid fa-edit "></i></button>
         </span>
         <span class="btn-group-secondary d-none">
                 <button class="btn btn-link btn-update" ><i class="fa-solid fa-check "></i></button>
                <button class="btn btn-link btn-cansel" ><i class="fa-solid fa-times "></i></button>
         </span>
    </td>
`;
};

const createRow = (name, point) => {
  const elRow = document.createElement("tr");
  elRow.innerHTML = getRowHtml(name, point);

  attachDeleteEventListener(elRow);
  attachEditEventListener(elRow);
  attachCanselEventListener(elRow);
  attachUpdateEventListener(elRow);
  return elRow;
};

const attachDeleteEventListener = (el) => {
  el.querySelector(".btn-del").addEventListener("click", () => {
    const name = el.querySelector("td:nth-child(2)").textContent;
    if (confirm(`${name} isimli kişiyi silmek istediğinize emin misiniz?`)) {
      el.remove();
      updateTableIndexes();
      updateAverage();
      setTable();
    }
  });
};

let orjName, orjPoint;

const attachEditEventListener = (el) => {
  el.querySelector(".btn-edit").addEventListener("click", () => {
    const elName = el.querySelector("td:nth-child(2)");
    const elPoint = el.querySelector("td:nth-child(3)");

    elName.contentEditable = true;
    elPoint.contentEditable = true;

    elName.focus();

    orjName = elName.textContent;
    orjPoint = elPoint.textContent;

    el.querySelector(".btn-group-primary").classList.add("d-none");
    el.querySelector(".btn-group-secondary").classList.remove("d-none");
  });
};
const attachCanselEventListener = (el) => {
  el.querySelector(".btn-cansel").addEventListener("click", () => {
    const elName = el.querySelector("td:nth-child(2)");
    const elPoint = el.querySelector("td:nth-child(3)");

    elName.innerText = orjName;
    elPoint.innerText = orjPoint;

    el.querySelector(".btn-group-primary").classList.remove("d-none");
    el.querySelector(".btn-group-secondary").classList.add("d-none");
  });
};

const attachUpdateEventListener = (el) => {
  el.querySelector(".btn-update").addEventListener("click", () => {
    const elName = el.querySelector("td:nth-child(2)");
    const elPoint = el.querySelector("td:nth-child(3)");

    el.querySelector(".btn-group-primary").classList.remove("d-none");
    el.querySelector(".btn-group-secondary").classList.add("d-none");

    updateAverage();
  });
};

const updateTableIndexes = () => {
  const elRows = document.querySelectorAll("#tblList tbody tr td:first-child");
  elRows.forEach((el, index) => {
    el.innerText = index + 1;
  });
};

const updateAverage = () => {
  const elPoints = Array.from(
    document.querySelectorAll("#tblList tbody tr td:nth-child(3)")
  );
  let total = elPoints.reduce((total, el) => total + parseInt(el.innerText), 0);

  document.querySelector("#tblList tfoot td:nth-child(3)").innerText =
    total / elPoints.length;
};

const setTable = () => {
  const isTableEmpty =
    document.querySelectorAll("#tblList tbody tr").length > 0 ? false : true;
  if (isTableEmpty) {
    document.querySelector("#tblList .empty-row").classList.remove("d-none");
    document.querySelector("#tblList .summary").classList.add("d-none");
  } else {
    document.querySelector("#tblList .empty-row").classList.add("d-none");
    document.querySelector("#tblList .summary").classList.remove("d-none");
  }
};

const deleteInputs = () => {
  document.querySelector("#txtName").value = "";
  document.querySelector("#txtPoint").value = "";
};
