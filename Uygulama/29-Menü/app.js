const menu = [
  {
    id: 1,
    title: "Tavuklu Pilav",
    category: "yemek",
    price: 15.99,
    img: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Tavuklu pilav, tavuk eti ve pirinçle yapılan bir pilav çeşididir. Tavuklu pilav, Türk mutfağında sıkça yapılan bir yemektir. Tavuklu pilavın yanında cacık, ayran, turşu, salata gibi yiyecekler de tüketilebilir.",
  },
  {
    id: 2,
    title: "Kuru Fasulye",
    category: "yemek",
    price: 12.99,
    img: "https://media.istockphoto.com/id/475841792/tr/foto%C4%9Fraf/beans-soup-rioja.jpg?b=1&s=612x612&w=0&k=20&c=3D8ZeTkixObbU3Okboob_LdQi5XlRDD4UhMooQ1S2R0=",
    desc: "leziz kuru fasulye",
  },
  {
    id: 3,
    title: "Karnıyarık",
    category: "yemek",
    price: 18.99,
    img: "https://media.istockphoto.com/id/151544293/tr/foto%C4%9Fraf/turkish-main-course-karn%C4%B1yar%C4%B1k.jpg?b=1&s=612x612&w=0&k=20&c=OMJpUlMpgZ07CUiE-_Jkax4gBL0N46OOcDXSM023A5M=",
    desc: "Karnıyarık, patlıcan, soğan ve domates ile yapılan bir yemektir. Karnıyarık, Türk mutfağında sıkça yapılan bir yemektir. Karnıyarıkın yanında cacık, ayran, turşu, salata gibi yiyecekler de tüketilebilir.",
  },
  {
    id: 4,
    title: "Kuru Patlıcan Dolması",
    category: "yemek",
    price: 14.99,
    img: "https://media.istockphoto.com/id/1413730992/tr/foto%C4%9Fraf/traditional-delicious-turkish-foods-dried-eggplant-stuffed.jpg?s=612x612&w=0&k=20&c=_aPVTLEaajh1TbtaoaP9JzkWmFiEHDyTWS1vF2b3c3g=",
    desc: "Kuru patlıcan dolması, kuru patlıcan ve iç harcı ile yapılan bir yemektir. Kuru patlıcan dolması, Türk mutfağında sıkça yapılan bir yemektir. Kuru patlıcan dolmasının yanında cacık, ayran, turşu, salata gibi yiyecekler de tüketilebilir.",
  },
  {
    id: 5,
    title: "Aşure",
    category: "tatlı",
    price: 10.99,
    img: "https://media.istockphoto.com/id/1266276802/tr/foto%C4%9Fraf/nar-tohumu-ve-ceviz-ile-t%C3%BCrk-tatl%C4%B1s%C4%B1-a%C5%9Fure-nuh-pudingi.jpg?b=1&s=612x612&w=0&k=20&c=G2d7J-FTEW5gG-ECvwrPWU1ZPR99E9fd4Rpr8q31TsA=",
    desc: "Özel zaman tatlısı",
  },
  {
    id: 6,
    title: "Baklava",
    category: "tatlı",
    price: 12.99,
    img: "https://images.pexels.com/photos/7393904/pexels-photo-7393904.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Özel zaman tatlısı",
  },
  {
    id: 7,
    title: "Arabaşı",
    category: "çorba",
    price: 8.99,
    img: "https://media.istockphoto.com/id/1453648641/tr/foto%C4%9Fraf/araba-soup-and-dough-special-araba-soup-for-yozgat-province-in-turkey-turkish-araba-made.jpg?s=612x612&w=0&k=20&c=WyAVXq6wzxfXpzFIQQX1IeYIdrl53sh8Im8y4iGPcVQ=",
    desc: "Arabaşı, et suyu ve bulgur ile yapılan bir çorba çeşididir. Arabaşı, Türk mutfağında sıkça yapılan bir çorbadır. Arabaşının yanında cacık, ayran, turşu, salata gibi yiyecekler de tüketilebilir.",
  },
  {
    id: 8,
    title: "Ezogelin Çorbası",
    category: "çorba",
    price: 8.99,
    img: "https://media.istockphoto.com/id/639629732/tr/foto%C4%9Fraf/turkish-tarhana-or-ezogelin-soup.jpg?b=1&s=612x612&w=0&k=20&c=YzzSNYFeIZp1GCxEpt1tlOjcCoN9i8btxy1zTxOFdRs=",
    desc: "Ezogelin çorbası, kırmızı mercimek ve bulgur ile yapılan bir çorba çeşididir. Ezogelin çorbası, Türk mutfağında sıkça yapılan bir çorbadır. Ezogelin çorbasının yanında cacık, ayran, turşu, salata gibi yiyecekler de tüketilebilir.",
  },
  {
    id: 9,
    title: "Salep",
    category: "içecek",
    price: 5.99,
    img: "https://media.istockphoto.com/id/1185473292/tr/foto%C4%9Fraf/k%C4%B1z-eli-geleneksel-t%C3%BCrk-i%C3%A7ecek-salep-tutun-t%C3%BCrk-merhemi.jpg?b=1&s=612x612&w=0&k=20&c=XZ7SZvblwjUeerAofEe9wzjBWms6xQTwWpu_dwEXByk=",
    desc: "Salep, süt ve salep tozu ile yapılan bir içecektir. Salep, Türk mutfağında sıkça yapılan bir içecektir. Salebin yanında çörek, kurabiye, kek gibi yiyecekler de tüketilebilir.",
  },
  {
    id: 10,
    title: "Boza",
    category: "içecek",
    price: 5.99,
    img: "https://images.pexels.com/photos/3394221/pexels-photo-3394221.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Boza, mısır unu ve şeker ile yapılan bir içecektir. Boza, Türk mutfağında sıkça yapılan bir içecektir. Bozanın yanında çörek, kurabiye, kek gibi yiyecekler de tüketilebilir.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
            ${item.desc}
        </p>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};
displayMenuItems(menu);
const displayMenuButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>
            ${category}
            </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
displayMenuButtons();
