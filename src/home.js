import restaurantImage from "../images/restaurant.jpg";

const contentDiv = document.querySelector("#content");

const image = document.createElement("img");
image.src = restaurantImage;

export function loadHome() {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(image);
}