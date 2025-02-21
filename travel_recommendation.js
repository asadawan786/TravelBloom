document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    // Sample recommendations data (replace with your JSON file data)
    const recommendations = {
        beaches: [
            {
                name: "Bora Bora, French Polynesia",
                imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                description: "An island known for its stunning turquoise waters and luxurious overwater bungalows."
            },
            {
                name: "Copacabana Beach, Brazil",
                imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
                description: "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
            }
        ],
        temples: [
            {
                name: "Angkor Wat, Cambodia",
                imageUrl: "https://images.unsplash.com/photo-1600112356915-fb44b6491d2d",
                description: "A UNESCO World Heritage site and the largest religious monument in the world."
            },
            {
                name: "Taj Mahal, India",
                imageUrl: "https://images.unsplash.com/photo-1601459427108-47e20d579a35",
                description: "An iconic symbol of love and a masterpiece of Mughal architecture."
            }
        ],
        countries: [
            {
                name: "Tokyo, Japan",
                imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
                description: "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
            },
            {
                name: "Kyoto, Japan",
                imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
                description: "Known for its historic temples, gardens, and traditional tea houses."
            }
        ]
    };

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
    searchBtn.addEventListener("click", () => {
        const keyword = searchInput.value.toLowerCase();
        let results = [];

        if (keyword === "beach" || keyword === "beaches") {
            results = recommendations.beaches;
        } else if (keyword === "temple" || keyword === "temples") {
            results = recommendations.temples;
        } else if (keyword === "country" || keyword === "countries") {
            results = recommendations.countries;
        } else {
            resultsDiv.innerHTML = "<p>No results found. Try searching for 'beach', 'temple', or 'country'.</p>";
            return;
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
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for contacting us! We'll get back to you shortly.");
            contactForm.reset();
        });
    }
});
