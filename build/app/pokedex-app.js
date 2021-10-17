import Pokedex from "./Pokedex/Pokedex.js";

const appContainer = document.querySelector(".app");
const myUrl = "https://ysarmiento-pokemon-api-2.herokuapp.com/pokemon/";

new Pokedex(appContainer, myUrl);
