import pancake from "../assets/images/pancake.png";
import burger from "../assets/images/burger.png";
import steak from "../assets/images/steak.png";
import spaghetti from "../assets/images/spaghetti.png";

import luffy2 from "../assets/images/luffy-2.png";
import "../css/menu.css";

const menus = ["Steak", "Burger", "Spaghetti", "Pancake"];
const prices = [5, 3, 4, 2];
const imgs = [steak, burger, spaghetti, pancake];

const content = document.getElementById("content");

function loadMenus() {
    const hero = document.createElement("h1");
    hero.className = "menu-hero";
    hero.innerHTML = "OUR MAIN DISH";
    content.appendChild(hero);

    const heroImg = document.createElement("img");
    heroImg.src = luffy2;
    heroImg.className = "menu-hero-img";
    content.appendChild(heroImg);

    const cards = document.createElement("div");
    cards.className = "cards";
    content.appendChild(cards);

    menus.forEach((menu, index) => {
        const menuCard = document.createElement("div");
        menuCard.className = "card-item";
        cards.appendChild(menuCard);

        const menuName = document.createElement("h1");
        menuName.innerHTML = menu;
        menuCard.appendChild(menuName);

        const menuPrice = document.createElement("h3");
        menuPrice.innerHTML = prices[index] + "$";
        menuCard.appendChild(menuPrice);

        const menuImg = document.createElement("img");
        menuImg.src = imgs[index];
        menuCard.appendChild(menuImg);
    });
}

export { loadMenus };
