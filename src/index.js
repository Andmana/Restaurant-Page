// entrypoint for the app

import "./styles.css";
import { loadHome } from "./pages/home.js";
import { loadMenus } from "./pages/menu.js";
import { loadContact } from "./pages/contact.js";
import { firstLoad } from "./functions/firstLoad.js";
import { initParallax } from "./functions/parallax.js";

firstLoad();
initParallax();
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenus();
});

contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
});
