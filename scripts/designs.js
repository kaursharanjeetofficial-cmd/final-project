const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

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



getCards(designs);


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