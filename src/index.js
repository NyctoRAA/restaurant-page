import { pageLoad, button1, button2, button3 } from "./initialPageLoad";
import { loadContact } from "./contact";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

pageLoad();


button1.addEventListener("click", loadHome);
button2.addEventListener("click", loadContact);
button3.addEventListener("click", loadMenu);