import "./styles.css";
import { loadHome } from "./pages/home.js";
import { loadMenus } from "./pages/menu.js";
import { loadContact } from "./pages/contact.js";
import { loadButton, homeBtn, menuBtn, contactBtn } from "./pages/body.js";

const content = document.getElementById("content");
function initializePage() {
    loadHome();

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
document.addEventListener("DOMContentLoaded", () => {
    loadButton();
    initializePage();
});
