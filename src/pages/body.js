import newworld from "../assets/images/new-world.png";
import menu from "../assets/images/menu.png";
import contact from "../assets/images/contact.png";
import onepiece from "../assets/images/one-piece.png";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

function loadButton() {
    const homeImg = document.createElement("img");
    homeImg.src = newworld;
    homeBtn.appendChild(homeImg);

    const menuImg = document.createElement("img");
    menuImg.src = menu;
    menuBtn.appendChild(menuImg);

    const contactImg = document.createElement("img");
    contactImg.src = contact;
    contactBtn.appendChild(contactImg);
}

export { loadButton, homeBtn, menuBtn, contactBtn };
