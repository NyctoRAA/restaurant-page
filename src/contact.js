const contentDiv = document.querySelector("#content");

export function loadContact() {
    contentDiv.innerHTML = "";

    const contact = document.createElement("div");
    contact.id = "contactDiv";

    const title = document.createElement("h1");
    title.innerHTML = "Contact Us";

    const title2 = document.createElement("h2");
    title2.innerHTML = "Phone: 961 321 965";

    const title3 = document.createElement("h3");
    title3.innerHTML = "Rua 1 Dezembro";

    contact.appendChild(title);
    contact.appendChild(title2);
    contact.appendChild(title3);

    contentDiv.appendChild(contact);
};