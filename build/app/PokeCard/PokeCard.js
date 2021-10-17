import Component from "../Component/Component.js";
import Page from "../Page/Page.js";
import Service from "../Service/Service.js";

class PokeCard extends Component {
  onePokemonUrl;
  pokemonName;
  pokemonId;
  pokemonImage;
  pokemonType;
  onePokemon;
  catched;
  myPokedexURL = "https://ysarmiento-pokemon-api-2.herokuapp.com/pokemon/";

  constructor(
    parentElement,
    className,
    pokemonName,
    onePokemonUrl,
    catched,
    idAPI
  ) {
    super(parentElement, className, "li");
    this.onePokemonUrl = onePokemonUrl;
    this.pokemonName = pokemonName;
    this.catched = catched ? "class='catched'" : "";
    this.deletePokemon = catched ? "class = 'pokemon-card__delete-button'" : "";
    this.idAPI = idAPI;

    (async () => {
      const getOnePokemon = new Service(this.onePokemonUrl);
      const showOnePokemon = await getOnePokemon.getData(this.onePokemonUrl);
      this.onePokemon = showOnePokemon;

      this.pokemonId = this.onePokemon.id;
      this.pokemonImage =
        this.onePokemon.sprites.other["official-artwork"].front_default;

      this.paintCard();
      this.generateHTML();

      const pokeball = this.element.querySelector(
        ".pokemon-card__pokeball > div:nth-of-type(1)"
      );
      pokeball.addEventListener("click", () => this.catchPokemon());

      if (idAPI) {
        const freePokemon = this.element.querySelector(
          ".pokemon-card__delete-button"
        );
        freePokemon.addEventListener("click", () => this.freePokemon());
      }
    })();
  }

  generateHTML() {
    this.pokemonName =
      this.pokemonName.charAt(0).toUpperCase() + this.pokemonName.slice(1);

    const pokemonHTML = `
            <div class="pokemon-card__pokeball">
              <div ${this.catched}></div>
              <div ${this.deletePokemon}></div>
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
      ".pokemon-card__pokeball > div:nth-of-type(1)"
    );
    pokeballPrint.classList.add("catched");

    this.printPokeball();
    const postPokemon = new Service(this.myPokedexURL);
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

  freePokemon() {
    const freePokemonAPI = new Service(this.myPokedexURL).deleteData(
      this.idAPI
    );
    this.element.remove();
  }
}

export default PokeCard;
