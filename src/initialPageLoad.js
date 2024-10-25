import restaurantImage from "./restaurant.jpg";

const image = document.createElement("img");
image.src = restaurantImage;

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const contentDiv = document.querySelector("#content");
const button1 = document.createElement("button");
button1.innerHTML = "Home";
const button2 = document.createElement("button");
button2.innerHTML = "Menu";
const button3 = document.createElement("button");
button3.innerHTML = "Contact";

export function pageLoad() {
    nav.appendChild(button1);
    nav.appendChild(button2);
    nav.appendChild(button3);

    contentDiv.appendChild(image);
}