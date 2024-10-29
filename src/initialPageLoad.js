import restaurantImage from "./restaurant.jpg";
import { loadContact } from "./contact";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

const image = document.createElement("img");
image.src = restaurantImage;

const nav = document.querySelector("nav");

const contentDiv = document.querySelector("#content");

const footer = document.querySelector("footer");

const button1 = document.createElement("button");
button1.id = "button1";
button1.innerHTML = "Home";

const button2 = document.createElement("button");
button2.id = "button2";
button2.innerHTML = "Menu";

const button3 = document.createElement("button");
button3.id = "button3";
button3.innerHTML = "Contact";

export function initialPageLoad() {
    nav.appendChild(button1);
    nav.appendChild(button2);
    nav.appendChild(button3);

    contentDiv.appendChild(image);

    const footerH1 = document.createElement("h1");
    footerH1.textContent = "FOGUETEIRO";

    const footerContent = document.createElement("p");
    footerContent.textContent = "The best portuguese traditional restaurant.";

    footer.appendChild(footerH1);
    footer.appendChild(footerContent);

    button1.addEventListener("click", loadHome);
    button2.addEventListener("click", loadContact);
    button3.addEventListener("click", loadMenu);
}