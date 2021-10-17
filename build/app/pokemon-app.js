import Page from "./Page/Page.js";

const appContainer = document.querySelector(".app");
const myUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";

new Page(appContainer, myUrl);

const pika = {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
};

// const hola = new Service(myUrl);
// hola.createData(pika);
