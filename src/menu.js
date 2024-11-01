import feijoadaImg from "../images/feijoada.jpg";
import francesinhaImg from "../images/francesinha.jpg";
import tripasImg from "../images/tripas.jpg";

const  contentDiv = document.querySelector("#content");

function createMenuItem(dish) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = dish.imgUrl;
    img.classList.add("cardImg");

    const cardContent = document.createElement("div");
    cardContent.id = "cardContent";

    const title = document.createElement("h2");
    title.textContent = dish.title;

    const drescription = document.createElement("p");
    drescription.textContent = dish.desc;

    cardContent.append(title, drescription);

    card.append(img, cardContent);

    return card;
};

export function loadMenu() {
    contentDiv.innerHTML = "";

    const dish1 = createMenuItem({
        imgUrl: feijoadaImg,
        title: "Feijoada",
        desc: "A feijoada é um dos pratos mais tradicionais da gastronomia portuguesa. A riqueza de sabor das carnes e dos enchidos faz deste prato um prato inesquecível."
    });

    const dish2 = createMenuItem({
        imgUrl: francesinhaImg,
        title: "Francesinha",
        desc: "Francesinha é uma sanduíche originária da cidade do Porto, em Portugal. A francesinha na sua variação sanduíche francesinha especial é constituída mais habitualmente por linguiça, salsicha fresca, fiambre, carnes frias e bife de carne de vaca, coberta com queijo posteriormente derretido."
    });

    const dish3 = createMenuItem({
        imgUrl: tripasImg,
        title: "Tripas",
        desc: "Tripas à moda do Porto é um prato tradicional nascido na cidade do Porto, e que, segundo uma lenda, remonta ao período dos Descobrimentos portugueses. O prato é confecionado com vários tipos de carne, tripas, enchidos e feijão branco."
    });

    const cardContainer = document.createElement("div");
    cardContainer.id = "cardContainer";

    cardContainer.append(dish1, dish2, dish3);

    contentDiv.append(cardContainer);
};