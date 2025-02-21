document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    // Fetch data from JSON
    async function fetchData() {
        const response = await fetch("./travel_recommendation_api.json");
        const data = await response.json();
        return data;
    }

    // Display recommendations
    function displayRecommendations(data) {
        resultsDiv.innerHTML = "";
        data.forEach(item => {
            const card = document.createElement("div");
            card.className = "recommendation-card";
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            resultsDiv.appendChild(card);
        });
    }

    // Handle search
    searchBtn.addEventListener("click", async () => {
        const keyword = searchInput.value.toLowerCase();
        const data = await fetchData();
        let results = [];

        if (keyword === "beach" || keyword === "beaches") {
            results = data.beaches;
        } else if (keyword === "temple" || keyword === "temples") {
            results = data.temples;
        } else if (keyword === "country" || keyword === "countries") {
            results = data.countries.flatMap(country => country.cities);
        }

        displayRecommendations(results);
    });

    // Clear results
    clearBtn.addEventListener("click", () => {
        resultsDiv.innerHTML = "";
        searchInput.value = "";
    });

    // Handle contact form submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        contactForm.reset();
    });
});
