# Star Wars Character & Movie Guide

## Project Overview

This project is a dynamic Star Wars character and movie guide using the [Star Wars API (SWAPI)](https://swapi.dev). The goal is to fetch and display a list of 10 or more Star Wars characters. When a character is clicked, an AJAX call retrieves and displays details about one of the movies they appeared in, including:

- Movie title
- Opening crawl
- Movie poster (stored locally in the images folder)

The guide is fully responsive, optimized for both mobile and desktop views, and enhanced with GreenSock animations.

---

## Features

- **AJAX Fetch Requests**: Retrieves data from SWAPI and updates the DOM dynamically.
- **Character List**: Displays at least 10 Star Wars characters as interactive links.
- **Movie Information Display**: Shows movie title, opening crawl, and poster when a character is clicked.
- **Graceful Error Handling**: Handles request failures with appropriate UI feedback.
- **Loading Indicator**: Displays a loading animation while fetching data.
- **HTML Template Elements / Template Literals**: Used for rendering content efficiently.
- **GreenSock Animations**: Enhances UI interactions.
- **Responsive Design**: Works across all screen sizes.

---

## Technologies Used

- HTML5
- CSS3 (including Flexbox and Grid for layout)
- JavaScript (ES6+ features, Fetch API)
- GreenSock (GSAP) for animations
- Git/GitHub for version control

---

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/AnnaNguyen205/Anna_Nguyen_Ali_El-Maniary_AJAX_REDUX
   ```
2. Navigate to the project folder:
   ```sh
   cd Anna_Nguyen_Ali_El-Maniary_AJAX_REDUX
   ```
3. Open `index.html` in a browser or run a local server.

---

## API Usage

- **Fetch Character List:**
  ```js
  fetch("https://swapi.dev/api/people/");
  ```
- **Fetch Movie Data:**
  ```js
  fetch("https://swapi.dev/api/films/{id}/");
  ```
- **Handle Errors:**
  ```js
  .catch(error => console.error("Error fetching data:", error));
  ```

## Contributors

- **El Maniary Ali**: [Ali El-Maniary](https://github-amari)
- **Nguyen Thi Thanh Thuong**: [Anna Nguyen](https://github.com/AnnaNguyen205)

---

### License

- MIT
- This project is for educational purposes only and is not affiliated with Star Wars or Lucasfilm Ltd.
