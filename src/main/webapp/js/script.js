// ========================================
// CineVerse Interactive Features
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------
    // Watch buttons
    // ----------------------------------------

    const watchButtons = document.querySelectorAll(".watch-btn");

    watchButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "🎬 Welcome to CineVerse!\n\n" +
                "Your movie is ready to play."
            );

        });

    });


    // ----------------------------------------
    // My List button
    // ----------------------------------------

    const infoButton = document.querySelector(".info-btn");

    if (infoButton) {

        infoButton.addEventListener("click", function () {

            this.textContent = "✓ Added to My List";

            this.style.background =
                "linear-gradient(90deg, #7b4dff, #ff3d81)";

        });

    }


    // ----------------------------------------
    // Movie card interaction
    // ----------------------------------------

    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const movieTitle =
                this.querySelector("h3").textContent;

            alert(
                "🎥 " + movieTitle +
                "\n\nMovie details coming soon..."
            );

        });

    });


    // ----------------------------------------
    // Search button
    // ----------------------------------------

    const searchButton =
        document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            const searchTerm =
                prompt("🔍 What do you want to watch?");

            if (searchTerm && searchTerm.trim() !== "") {

                alert(
                    "Searching CineVerse for: " +
                    searchTerm
                );

            }

        });

    }


    // ----------------------------------------
    // Profile button
    // ----------------------------------------

    const profileButton =
        document.querySelector(".profile-btn");

    if (profileButton) {

        profileButton.addEventListener("click", function () {

            alert(
                "👤 CineVerse Profile\n\n" +
                "Welcome back, CineVerse member!"
            );

        });

    }


    // ----------------------------------------
    // Genre cards
    // ----------------------------------------

    const genreCards =
        document.querySelectorAll(".genre-card");

    genreCards.forEach(function (genre) {

        genre.addEventListener("click", function () {

            const genreName =
                this.textContent.trim();

            alert(
                "🎬 Exploring " +
                genreName +
                " movies..."
            );

        });

    });


    // ----------------------------------------
    // Navbar active section
    // ----------------------------------------

    const navigationLinks =
        document.querySelectorAll(".navbar nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigationLinks.forEach(function (item) {
                item.style.color = "";
            });

            this.style.color = "#a66cff";

        });

    });


    // ----------------------------------------
    // Welcome message
    // ----------------------------------------

    console.log(
        "🎬 CineVerse loaded successfully!"
    );

});
