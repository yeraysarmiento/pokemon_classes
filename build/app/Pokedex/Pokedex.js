import Component from "../Component/Component.js";
import Service from "../Service/Service.js";
import PokeCard from "../PokeCard/PokeCard.js";

class Pokedex extends Component {
  pokemonArray;
  urlPokemon;

  constructor(parentElement, urlPokemon) {
    super(parentElement, "container");
    this.urlPokemon = urlPokemon;

    this.generateHTML();
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
              <li class="menu__icon menu__icon--selected"><a href="./pokedex.html"></a></li>
              <li class="menu__icon"></li>
            </ul>
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
      this.pokemonArray = showPokemon;

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
}

export default Pokedex;
