const designs = [
    {
        name: "Bridal Design",
        category: "bridal",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Simple Design",
        category: "simple",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Gel Nails",
        category: "gel",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Glitter Nails",
        category: "glitter",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "French Tips",
        category: "french",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Party Nails",
        category: "party",
        image: "https://via.placeholder.com/150"
    }
];



const banners = [
  {
    image: "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    title: "Bridal Nails"
  },
  {
    image: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Gel Extensions"
  },
  {
    image: "https://images.unsplash.com/photo-1690749138086-7422f71dc159?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbCUyMHNhbG9ufGVufDB8fDB8fHww",
    title: "French Tips"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFpbCUyMHNhbG9ufGVufDB8fDB8fHww",
    title: "Party Nails"
  }
];




let index = 0;
const slider = document.getElementById("slider");

function renderBanners() {
  slider.innerHTML = "";

  banners.forEach((banner, i) => {
    const div = document.createElement("div");
    div.classList.add("slide");

    if (i === 0) div.classList.add("active");

    div.innerHTML = `
      <img src="${banner.image}" alt="${banner.title}">
    `;

    slider.appendChild(div);
  });
}

let slides = [];

function updateSlides() {
  slides = document.querySelectorAll(".slide");
}

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

// next and prev buttons
function changeSlide(step) {
  index += step;

  if (index >= banners.length) index = 0;
  if (index < 0) index = banners.length - 1;

  showSlide(index);
}


setInterval(() => {
  changeSlide(1);
}, 4000);







getQuoteOfTheDay()
getCards(designs);


 
renderBanners();
updateSlides();
showSlide(index);


 async function getQuoteOfTheDay() {
  

 try {
    const response = await fetch("https://api.api-ninjas.com/v2/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "trCfVlcPqRGSHWSzSpupUHTOY2XJkIAzXBT0n7rm"
      }
    });

    const data = await response.json();

    const quote= data[0];

    document.getElementById("quoteText").innerText = `"${quote.quote}"`;
    document.getElementById("quoteAuthor").innerText = `— ${quote.author}`;

  } catch (error) {
    document.getElementById("quoteText").innerText =
      "Failed to load quote ";
    console.error(error);
  }
}


function getCards(cardsList){
cardContainer.innerHTML="";


 cardsList.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;

        cardContainer.appendChild(card);
    });
}


