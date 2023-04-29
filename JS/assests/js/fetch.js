import { searchShows } from "./tvMazeApi.js";

document.querySelector("#txtSearch").addEventListener("input", function (e) {
  const query = e.target.value;
  if (!query) return;

  searchShows(query, function (data) {
    let strHtml = "";

    data.forEach((item) => {
      strHtml += createMovieHtml(item);
    });

    document.querySelector("#tvShows").innerHTML = strHtml;
  });

  createMovieList(strHtml, function (strHtml) {
    document.querySelector("#tvShows").innerHTML = strHtml;
  });
});

const createMovieHtml = (item) => {
  return `<div class="col">
    <div class="card">
      <img src=${item.show.image.medium} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.show.name}</h5>
        <p class="card-text">
        ${item.show.genres[0]}
        </p>
      </div>
    </div>
  </div> `;
};
