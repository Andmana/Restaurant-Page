import "./styles.css";
import { loadHome } from "./pages/home.js";
import { loadMenus } from "./pages/menu.js";
import { loadContact } from "./pages/contact.js";

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
