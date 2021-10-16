import Component from "../Component/Component.js";
import Service from "../Service/Service.js";

class Page extends Component {
  pokemonArray = [];

  constructor(parentElement, urlPokemon) {
    super(parentElement, "container");
    this.urlPokemon = urlPokemon;

    (async () => {
      const getPokemon = new Service(this.urlPokemon);
      const showPokemon = await getPokemon.getData(this.urlPokemon);
      const pokemonArray = showPokemon.results;
      console.log(pokemonArray);

      /* this.pokemonArray.map(
        (singlePokemon) =>
          new pokeCard("", "pokemon-card", "li", singlePokemon.url)
      ); */
    })();

    this.generateHTML();
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
              <button class="control-container__left"></button>
              <button class="control-container__right"></button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div>
          <button></button>
          <button></button>
        </div>
        <ul class="gallery">
        </ul>
      </main>
       `;

    this.element.innerHTML = html;
  }
}

export default Page;
