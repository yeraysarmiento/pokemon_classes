import Component from "../Component/Component.js";
import Service from "../Service/Service.js";
import PokeCard from "../PokeCard/PokeCard.js";
import Button from "../Button/Button.js";

class Page extends Component {
  pokemonArray;
  urlPokemon;
  nrPokemons = 0;

  constructor(parentElement, urlPokemon) {
    super(parentElement, "container");
    this.urlPokemon = urlPokemon;

    this.generateHTML();
    this.generateButtons();
    this.generateCards();

    let makePokedex = document.querySelector(".menu__icon:nth-of-type(1)");
    makePokedex.addEventListener("click", () => this.generatePokedex());
  }

  generateHTML() {
    const html = `
    <header class="header">
        <div>
          <h1>
            <a href="index.html">
              <img
                class="header__image"
                src="img/logo-pokemon.png"
                alt="Logo Pokemon"
                width="100;"
            /></a>
          </h1>
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__icon"></li>
              <li class="menu__icon"></li>
            </ul>
            <div class="control-container">

            </div>
          </nav>
        </div>
      </header>
      <main>
        <ul class="gallery">
        </ul>
      </main>
       `;

    this.element.innerHTML = html;
  }

  generateCards() {
    const pokemonContainer = document.querySelector(".gallery");

    (async () => {
      const getPokemon = new Service(this.urlPokemon);
      const showPokemon = await getPokemon.getData(this.urlPokemon);
      this.pokemonArray = showPokemon.results;

      this.pokemonArray.map(
        (onePokemon) =>
          new PokeCard(
            pokemonContainer,
            "pokemon-card",
            onePokemon.name,
            onePokemon.url
          )
      );
    })();
  }

  generateButtons() {
    let pagePokemons = document.querySelector(".control-container");

    new Button(pagePokemons, "control-container__left", () =>
      this.previousPage()
    );

    new Button(pagePokemons, "control-container__right", () => this.nextPage());
  }

  deleteCards() {
    let deletePokemon = document.querySelector(".gallery");
    while (deletePokemon.firstChild) {
      deletePokemon.removeChild(deletePokemon.firstChild);
    }
  }

  previousPage() {
    this.deleteCards();
    this.generateNewUrl(-1);
    this.generateCards();
  }

  nextPage() {
    this.deleteCards();
    this.generateNewUrl(1);
    this.generateCards();
  }

  generateNewUrl(pageNumber) {
    this.nrPokemons = this.nrPokemons + pageNumber;
    if (this.nrPokemons < 0) {
      this.nrPokemons = 0;
    }
    this.urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${
      this.nrPokemons * 50
    }&limit=50`;
  }

  generatePokedex() {
    let changeNavButton = document.querySelector(".menu__icon:nth-of-type(1)");
    changeNavButton.classList.add("menu__icon--selected");

    this.deleteCards();
    this.urlPokemon = "https://ysarmiento-pokemon-api-2.herokuapp.com/pokemon/";

    const pokemonContainer = document.querySelector(".gallery");

    (async () => {
      const getPokemon = new Service(this.urlPokemon);
      const showPokemon = await getPokemon.getData(this.urlPokemon);
      this.pokemonArray = showPokemon;

      this.pokemonArray.map(
        (onePokemon) =>
          new PokeCard(
            pokemonContainer,
            "pokemon-card",
            onePokemon.name,
            onePokemon.url,
            onePokemon.catched,
            onePokemon.id
          )
      );
    })();

    let pagePokemons = document.querySelector(".control-container");
    pagePokemons.remove();
  }
}

export default Page;
