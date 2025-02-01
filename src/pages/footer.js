import newworld from "../assets/images/new-world.png";
import menu from "../assets/images/menu.png";
import contact from "../assets/images/contact.png";
import onepiece from "../assets/images/one-piece.png";

function loadFooter() {
    const footer = document.querySelector("footer");

    for (let i = 1; i <= 4; i++) {
        const wave = document.createElement("div");
        wave.classList.add(`wave`, `wave${i}`);
        footer.appendChild(wave);
    }
}

export { loadFooter };
