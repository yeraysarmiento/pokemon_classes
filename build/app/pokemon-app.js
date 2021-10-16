import Page from "./Page/Page.js";
import PokeCard from "./PokeCard/PokeCard.js";
import Service from "./Service/Service.js";

const appContainer = document.querySelector(".app");
const myUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";

const appPage = new Page(appContainer, myUrl);
