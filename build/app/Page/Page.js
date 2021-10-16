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

    new Button(pagePokemons, "control-container__left", this.getLessPokemons);

    new Button(pagePokemons, "control-container__right", () => this.nextPage);
  }

  deleteCards() {
    let deletePokemon = document.querySelector(".gallery");
    while (deletePokemon.firstChild) {
      deletePokemon.removeChild(deletePokemon.firstChild);
    }
  }

  nextPage() {
    console.log("hola");
    this.deleteCards();
    this.generateNewUrl(1);
    this.generateCards();
  }

  generateNewUrl(pageNumber) {
    console.log("hola");
    this.nrPokemons = this.nrPokemons + pageNumber;
    this.urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${
      this.nrPokemons * 50
    }&limit=50`;
  }
}

export default Page;
