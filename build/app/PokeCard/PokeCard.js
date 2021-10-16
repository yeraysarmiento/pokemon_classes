import Component from "../Component/Component.js";
import Service from "../Service/Service.js";

class PokeCard extends Component {
  onePokemonUrl;
  pokemonName;
  pokemonId;
  pokemonImage;
  pokemonType;

  constructor(parentElement, className, pokemonName, onePokemonUrl) {
    super(parentElement, className, "li");
    this.onePokemonUrl = onePokemonUrl;
    this.pokemonName = pokemonName;

    (async () => {
      const getOnePokemon = new Service(this.onePokemonUrl);
      const showOnePokemon = await getOnePokemon.getData(this.onePokemonUrl);
      this.onePokemon = showOnePokemon;

      this.pokemonId = this.onePokemon.id;
      this.pokemonImage =
        this.onePokemon.sprites.other["official-artwork"].front_default;

      this.pokemonType = this.onePokemon.types[0].type.name;
      console.log(this.pokemonType);

      this.generateHTML();
    })();
  }

  generateHTML() {
    const pokemonHTML = `
            <div class="pokemon-card__pokeball">
              <div></div>
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
}

export default PokeCard;
