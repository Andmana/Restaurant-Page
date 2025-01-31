import "./styles.css";
import { greeting } from "./greeting.js";
import { loadHome } from "./home.js";
import { loadMenus } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.getElementById("content");
function initializePage() {
    loadHome();

    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("contact-btn");

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
}
document.addEventListener("DOMContentLoaded", initializePage);
