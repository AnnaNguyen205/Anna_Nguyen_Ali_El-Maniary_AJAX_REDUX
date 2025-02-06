(() => {
  const charBox = document.querySelector("#character-box");
  const reviewTemplate = document.querySelector("#review-template");
  const reviewCon = document.querySelector("#review-con");
  const baseURL = "https://swapi.dev/api/";

  function getCharacters() {
    fetch(`${baseURL}people/`)
      .then((response) => response.json())
      .then((response) => {
        const characters = response.results;
        characters.forEach((character, index) => {
          const div = document.createElement("div");
          const p = document.createElement("p");
          const img = document.createElement("img");
          const a = document.createElement("a");

          p.textContent = character.name;
          img.src = `images/character${index}.webp`; // Placeholder character images
          a.dataset.movies = JSON.stringify(character.films); // Store movie URLs in dataset
          div.classList.add("characters");

          a.appendChild(img);
          a.appendChild(p);
          div.appendChild(a);
          charBox.appendChild(div);
        });
      })
      .then(() => {
        const links = document.querySelectorAll("#character-box div a");
        links.forEach((link) => {
          link.addEventListener("click", getRandomMovie);
        });
      })
      .catch((err) => {
        console.log(err);
        charBox.innerHTML = "<p>Failed to load characters.</p>";
      });
  }

  function getRandomMovie(e) {
    reviewCon.innerHTML = ""; // Clear previous content
    const movieURLs = JSON.parse(e.currentTarget.dataset.movies); // Get array of movie URLs

    if (movieURLs.length === 0) {
      reviewCon.innerHTML = "<p>No movies available for this character.</p>";
      return;
    }

    // Select a random movie from the list
    const randomMovieURL =
      movieURLs[Math.floor(Math.random() * movieURLs.length)];

    fetch(randomMovieURL)
      .then((response) => response.json())
      .then((movie) => {
        const clone = reviewTemplate.content.cloneNode(true);

        const movieTitle = clone.querySelector(".movie-title");
        movieTitle.textContent = movie.title;

        const moviePoster = clone.querySelector(".movie-poster");

        // Use episode_id to assign the correct movie poster
        const posterNumber = movie.episode_id; // Episode ID matches movieposterX.webp
        moviePoster.src = `images/${posterNumber}.jpg`;
        moviePoster.alt = `${movie.title} Poster`;

        const crawlText = clone.querySelector(".crawl-text");
        crawlText.textContent = movie.opening_crawl;

        reviewCon.appendChild(clone);
      })
      .catch((err) => {
        console.log(err);
        reviewCon.innerHTML = "<p>Failed to load movie details.</p>";
      });
  }

  getCharacters();
})();
