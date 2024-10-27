const contentDiv = document.querySelector("#content");

export function loadMenu() {
    contentDiv.innerHTML = "";

    const menu = document.createElement("div");
    menu.id = "menuDiv";

    const title = document.createElement("h1");
    title.innerHTML = "Menu of the day";

    const menuContentList = document.createElement("ul");

    const menuItem1 = document.createElement("li");
    menuItem1.innerHTML = "Feijoada - 9€";

    const menuItem2 = document.createElement("li");
    menuItem2.innerHTML = "Tripas - 10€";

    const menuItem3 = document.createElement("li");
    menuItem3.innerHTML = "Febras C/Batata - 8€";

    const menuItem4 = document.createElement("li");
    menuItem4.innerHTML = "Sardinha na brasa - 11€";

    const menuItem5 = document.createElement("li");
    menuItem5.innerHTML = "Francesinha - 13€";

    menuContentList.appendChild(menuItem1);
    menuContentList.appendChild(menuItem2);
    menuContentList.appendChild(menuItem3);
    menuContentList.appendChild(menuItem4);
    menuContentList.appendChild(menuItem5);

    menu.appendChild(title);
    menu.appendChild(menuContentList);

    contentDiv.appendChild(menu);
};