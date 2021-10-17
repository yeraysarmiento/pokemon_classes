import Component from "../Component/Component.js";
import Service from "../Service/Service.js";

class PokeCard extends Component {
  onePokemonUrl;
  pokemonName;
  pokemonId;
  pokemonImage;
  pokemonType;
  onePokemon;
  catched;

  constructor(parentElement, className, pokemonName, onePokemonUrl, catched) {
    super(parentElement, className, "li");
    this.onePokemonUrl = onePokemonUrl;
    this.pokemonName = pokemonName;
    this.catched = catched ? "catched" : "";

    (async () => {
      const getOnePokemon = new Service(this.onePokemonUrl);
      const showOnePokemon = await getOnePokemon.getData(this.onePokemonUrl);
      this.onePokemon = showOnePokemon;

      this.pokemonId = this.onePokemon.id;
      this.pokemonImage =
        this.onePokemon.sprites.other["official-artwork"].front_default;

      this.paintCard();
      this.generateHTML();

      const pokeball = this.element.querySelector(".pokemon-card__pokeball");
      pokeball.addEventListener("click", () => this.catchPokemon());
    })();
  }

  generateHTML() {
    const pokemonHTML = `
            <div class="pokemon-card__pokeball">
              <div class="${this.catched}"></div>
            </div>
            <div class="pokemon-card__image">
              <div></div>
              <img
                src="${this.pokemonImage}"
                alt="Pokemon Togepi"
                width="100px"
                height="100px"
              />
            </div>
            <div class="pokemon-card__main-info">
              <p class="pokemon-card__id"># ${this.pokemonId}</p>
              <h2 class="pokemon-card__name">${this.pokemonName}</h2>
            </div>`;
    this.element.innerHTML = pokemonHTML;
  }

  paintCard() {
    this.pokemonType = this.onePokemon.types[0].type.name;
    this.element.classList.add(this.pokemonType);
  }

  catchPokemon() {
    const pokeballPrint = this.element.querySelector(
      ".pokemon-card__pokeball > div"
    );
    pokeballPrint.classList.add("catched");

    this.printPokeball();
    const myPokedexURL =
      "https://ysarmiento-pokemon-api-2.herokuapp.com/pokemon/";
    const postPokemon = new Service(myPokedexURL);
    postPokemon.createData({
      name: this.pokemonName,
      url: this.onePokemonUrl,
      catched: true,
    });
  }

  printPokeball() {
    const pokeballPrint = this.element.querySelector(
      ".pokemon-card__pokeball > div"
    );
    pokeballPrint.classList.add("catched");
  }
}

export default PokeCard;
