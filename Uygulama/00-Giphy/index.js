document.querySelector("#search").addEventListener("click", (e) => {
  e.preventDefault();
  const arananKelime = document.querySelector("#search-term").value;
  if (!arananKelime) return;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=jvwQ39CJL5MLoGf9d3Qi6a6uEa4UqlS1&q=${arananKelime}&limit=10&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)

      let strHtml = "";

      data.data.forEach((element) => {
        // console.log(element)
        strHtml += `<div>
       
         <img src="${element.images.downsized_medium.url}" />
        
      
     </div> `;
      });

      document.querySelector("#gifShows").innerHTML = strHtml;
    });
});
