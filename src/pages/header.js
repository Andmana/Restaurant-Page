import newworld from "../assets/images/new-world.png";
import menu from "../assets/images/menu.png";
import contact from "../assets/images/contact.png";
import onepiece from "../assets/images/one-piece.png";

function loadHeader() {
    const header = document.querySelector("header");
    const nav = document.createElement("nav");
    header.appendChild(nav);

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("hvr-wobble-top");
    homeBtn.id = "home-btn";
    nav.appendChild(homeBtn);

    const homeImg = document.createElement("img");
    homeImg.src = newworld;
    homeBtn.appendChild(homeImg);

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("hvr-wobble-top");
    menuBtn.id = "menu-btn";
    nav.appendChild(menuBtn);

    const menuImg = document.createElement("img");
    menuImg.src = menu;
    menuBtn.appendChild(menuImg);

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("hvr-wobble-top");
    contactBtn.id = "contact-btn";
    nav.appendChild(contactBtn);

    const contactImg = document.createElement("img");
    contactImg.src = contact;
    contactBtn.appendChild(contactImg);

    for (let i = 1; i <= 4; i++) {
        const wave = document.createElement("div");
        wave.classList.add(`wave`, `wave${i}`);
        header.appendChild(wave);
    }
}

export { loadHeader };
