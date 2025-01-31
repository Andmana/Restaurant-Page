import pancake from "./assets/images/pancake.jpg";
import pizza from "./assets/images/pizza.jpg";
import steak from "./assets/images/steak.jpg";
import Spaghetti from "./assets/images/steak.jpg";

const menus = ["Steak", "Pizza", "Spaghetti", "Pancake"];
const prices = [5, 3, 4, 2];
const imgs = [steak, pizza, Spaghetti, pancake];

const content = document.getElementById("content");

function loadMenus() {
    const hero = document.createElement("h2");
    hero.innerHTML = "Our main dish";
    content.appendChild(hero);

    const cards = document.createElement("div");
    content.appendChild(cards);

    menus.forEach((menu, index) => {
        const menuCard = document.createElement("div");
        cards.appendChild(menuCard);

        const menuName = document.createElement("h3");
        menuName.innerHTML = menu;
        menuCard.appendChild(menuName);

        const menuPrice = document.createElement("span");
        menuPrice.innerHTML = prices[index] + "$";
        menuCard.appendChild(menuPrice);

        const menuImg = document.createElement("img");
        menuImg.src = imgs[index];
        menuCard.appendChild(menuImg);
    });
}

export { loadMenus };
