import Pokedex from "./Pokedex/Pokedex.js";
import Service from "./Service/Service.js";

const appContainer = document.querySelector(".app");
const myUrl = "https://ysarmiento-pokemon-api-2.herokuapp.com/pokemon/";

new Pokedex(appContainer, myUrl);

const pika = {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
};

// const hola = new Service(myUrl);

// hola.createData(pika);
