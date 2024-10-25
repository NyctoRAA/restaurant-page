import restaurantImage from "./restaurant.jpg";

const image = document.createElement("img");
image.src = restaurantImage;

export function loadHome() {
    contentDiv.appendChild(image);
}