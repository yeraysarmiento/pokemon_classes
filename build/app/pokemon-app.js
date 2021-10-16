import Page from "./Page/Page.js";

const appContainer = document.querySelector(".app");
const myUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

const appPage = new Page(appContainer, myUrl);
