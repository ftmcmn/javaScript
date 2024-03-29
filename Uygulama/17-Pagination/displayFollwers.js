const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url: img, html_url, login } = person;
      return `<article class="card">
        <img src="${img}" alt="${login}">
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>
        </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default display;
