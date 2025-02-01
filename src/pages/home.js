import homeImg from "../assets/images/luffy.png";
import "../css/home.css";
// Fix: Remove the '#' from getElementById
const content = document.getElementById("content");
function loadHome() {
    content.innerHTML = "";

    const description = document.createElement("div");
    description.className = "description";
    content.appendChild(description);

    const hero = document.createElement("h1");
    hero.textContent = "WELCOME TO NEW WORLD RESTAURANT";
    description.appendChild(hero);

    const text = document.createElement("h2");
    text.textContent =
        "EMBARK ON A FLAVOR ADVENTURE – TASTE THE SENSATIONS OF THE NEW WORLD!";
    description.appendChild(text);

    const imageWrap = document.createElement("div");
    imageWrap.className = "parallax-wrap";
    content.appendChild(imageWrap);

    const image = document.createElement("img");
    image.src = homeImg;
    image.setAttribute("value", 7);
    imageWrap.appendChild(image);
}

export { loadHome };
