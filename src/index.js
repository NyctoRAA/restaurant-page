import { pageLoad } from "./initialPageLoad";
import { loadContact } from "./contact";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

pageLoad();

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button1.addEventListener("click", loadHome);
button2.addEventListener("click", loadContact);
button3.addEventListener("click", loadMenu);