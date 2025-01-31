function loadContact() {
    const content = document.getElementById("content");

    const phonesContainer = document.createElement("div");
    content.appendChild(phonesContainer);

    const phoneH2 = document.createElement("h1");
    phoneH2.innerHTML = "Phone :";
    phonesContainer.appendChild(phoneH2);

    const phone1 = document.createElement("h3");
    phone1.innerHTML = "+62 XXX 1234 4321";
    phonesContainer.appendChild(phone1);

    const phone2 = document.createElement("h3");
    phone2.innerHTML = "+62 XXX 4321 1234";
    phonesContainer.appendChild(phone2);

    const addressContainer = document.createElement("div");
    content.appendChild(addressContainer);

    const addressH2 = document.createElement("h1");
    addressH2.innerHTML = "Address :";
    addressContainer.appendChild(addressH2);

    const address = document.createElement("h3");
    address.innerHTML = "Greend Land";
    addressContainer.appendChild(address);
}

export { loadContact };
