document.querySelector("#search-term").addEventListener("input", (e) => {
  const arananKelime = e.target.value;

  if (!arananKelime) return;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=jvwQ39CJL5MLoGf9d3Qi6a6uEa4UqlS1&q=${arananKelime}&limit=10&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let strHtml = "";

      data.data.forEach((element) => {
        strHtml += `<div class="col">
           <div class="card">
             <img src="${element.images.original.url}" class="card-img-top" alt="..." />
            
           </div>
         </div> `;
      });

      document.querySelector("#gifShows").innerHTML = strHtml;
    });
});
