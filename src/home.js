import homeImg from "./restaurant.jpeg";

// Fix: Remove the '#' from getElementById
const content = document.getElementById("content");

function loadHome() {
    content.innerHTML = "";

    const home = document.createElement("div");
    home.id = "Home";
    content.appendChild(home);

    const hero = document.createElement("h1");
    hero.textContent = "Welcome to MyRest";
    home.appendChild(hero);

    const description = document.createElement("p");
    description.textContent = "Enjoy delicious food for cheap price.";
    home.appendChild(description);

    const image = document.createElement("img");
    image.src = homeImg;
    home.appendChild(image);
}

export { loadHome, content };
