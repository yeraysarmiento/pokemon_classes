import Page from "./Page/Page.js";
import PokeCard from "./PokeCard/PokeCard.js";
import Service from "./Service/Service.js";

const appContainer = document.querySelector(".app");
const myUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

const appPage = new Page(appContainer, myUrl);

const service = new Service("https://pokeapi.co/api/v2/pokemon/21/");
