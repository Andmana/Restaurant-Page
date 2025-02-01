import "../css/contact.css";

function loadContact() {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.className = "contact-container";
    content.appendChild(container);

    const card = document.createElement("div");
    card.className = "contact-card";
    card.innerHTML = `
                        <div class="card-inner">
                            <div class="card-front">
                            <span>+6 000 XXX 123</span>
                            <span>+6 000 123 XXX</span>
                            <span>2 Chome-3-1 Kaiyocho, Gamagori, Aichi 443-0014, Jepang</span>
                            </div>
                            <div class="card-back">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.896238221074!2d137.26985000208933!3d34.80855227288162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004c66a94a4bed3%3A0xa9bd9f8e8f44f20a!2sLaguna%20Ten%20Bosch!5e0!3m2!1sid!2sid!4v1738420361218!5m2!1sid!2sid" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                     `;
    container.appendChild(card);

    const about = document.createElement("div");
    about.className = "contact-about";
    container.appendChild(about);

    const hero = document.createElement("h1");
    hero.textContent = "ABOUT US - NEW WORLD RESTAURANT";
    about.appendChild(hero);

    const title = document.createElement("h2");
    title.textContent = "Where the Grand Line meets your plate!";
    about.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = `Welcome to the <strong>One Piece Restaurant</strong>, a place where the spirit of adventure and the flavors of the Grand Line come together! Inspired by the legendary Straw Hat Pirates, our restaurant offers a unique dining experience that will make you feel like you're part of Luffy's crew.`;
    about.appendChild(desc);
}
export { loadContact };
