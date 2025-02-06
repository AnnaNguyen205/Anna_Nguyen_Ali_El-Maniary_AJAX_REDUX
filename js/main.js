(() => {
  const charBox = document.querySelector("#character-box");
  const reviewTemplate = document.querySelector("#review-template");
  const reviewCon = document.querySelector("#review-con");
  const baseURL = "https://swapi.dev/api/";
  // GSAP timeline
  // let tl = gsap.timeline();

  function getCharacters() {
    fetch(`${baseURL}/people/`)
      .then((response) => response.json())
      .then(function (response) {
        console.log(response);
        const characters = response.results;
        characters.forEach((character, index) => {
          const div = document.createElement("div");
          const p = document.createElement("p");
          const img = document.createElement("img");
          const a = document.createElement("a");

          p.textContent = character.name;
          img.src = `images/character${index}.webp`;
          a.dataset.review = character.url;
          div.classList.add("characters");

          a.appendChild(img);
          a.appendChild(p);
          div.appendChild(a);
          charBox.appendChild(div);
        });
      })
      .then(function () {
        const links = document.querySelectorAll("#character-box div a");
        console.log(links);
        links.forEach(function (link) {
          link.addEventListener("click", getReview);
        });
      })
      .catch(function (err) {
        console.log(err);
        //need to add error handling for the user
      });
  }

  function getReview(e) {
    console.log("getReview Called");
    console.log(e.currentTarget.dataset.review);
    const reviewID = e.currentTarget.dataset.review;
    fetch(`${baseURL}?tt=${reviewID}`)
      .then((response) => response.json())
      .then(function (response) {
        reviewCon.innerHTML = "";
        console.log(response.short.review.reviewBody);
        const clone = reviewTemplate.content.cloneNode(true);
        const reviewDescription = clone.querySelector(".review-description");
        reviewDescription.innerHTML = response.short.review.reviewBody;
        const reviewHeading = clone.querySelector(".review-heading");
        reviewHeading.innerHTML = response.short.name;
        reviewCon.appendChild(clone);
      })
      .catch(function (err) {
        reviewCon.innerHTML = "<p>No review available for this selection.</p>";
      });
  }

  getCharacters();
})();
