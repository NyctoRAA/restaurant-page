import restaurantImage from "./restaurant.jpg";

const image = document.createElement("img");
image.src = restaurantImage;

const nav = document.querySelector("nav");

const contentDiv = document.querySelector("#content");

const footer = document.querySelector("footer");

export const button1 = document.createElement("button");
button1.id = "button1";
button1.innerHTML = "Home";

export const button2 = document.createElement("button");
button2.id = "button2";
button2.innerHTML = "Menu";

export const button3 = document.createElement("button");
button3.id = "button3";
button3.innerHTML = "Contact";

export function pageLoad() {
    nav.appendChild(button1);
    nav.appendChild(button2);
    nav.appendChild(button3);

    contentDiv.appendChild(image);

    const footerH1 = document.createElement("h1");
    footerH1.textContent = "FOGUETEIRO";

    const footerContent = document.createElement("p");
    footerContent.textContent = "The portuguese traditional restaurant.";

    footer.appendChild(footerH1);
    footer.appendChild(footerContent);
}