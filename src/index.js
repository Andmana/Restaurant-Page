import "./styles.css";
import { greeting } from "./greeting.js";
import { loadHome, content } from "./home.js";

function initializePage() {
    loadHome();

    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("contact-btn");

    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", () => {
        content.innerHTML = "";
    });
}
document.addEventListener("DOMContentLoaded", initializePage);
