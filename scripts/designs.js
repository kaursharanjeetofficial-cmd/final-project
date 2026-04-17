const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

let designs = [];
  
getDesigns()

function getCards(cardsList) {
    cardContainer.innerHTML = "<p style='text-align:center;'>Loading...</p>";

    setTimeout(() => {
        cardContainer.innerHTML = "";

        if (cardsList.length === 0) {
            cardContainer.innerHTML = "<p style='text-align:center;'>No designs found</p>";
            return;
        }

        cardsList.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-category", item.category);
            card.innerHTML = `
                <div class="card-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <p>${item.name}</p>
            `;

            cardContainer.appendChild(card);
        });
    });
}



function filterDesign(category) {
    if (category === "all") {
        getCards(designs);
    } else {
        const filtered = designs.filter(item => item.category === category);
        getCards(filtered);
    }
}






// Search functionality
searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

     const filtered = designs.filter(item =>
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    );

    getCards(filtered);
});


 async function getDesigns() {
  

 try {
    const response = await fetch("https://raw.githubusercontent.com/kaursharanjeetofficial-cmd/final-project/main/cards.json", {
      method: "GET"
    });

    const data = await response.json();
    designs = data;
    getCards(data);

   

   

  } catch (error) {
    document.getElementById("quoteText").innerText =
      "Failed to load designs ";
    console.error(error);
  }
}