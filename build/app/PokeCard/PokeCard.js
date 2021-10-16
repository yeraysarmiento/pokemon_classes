import Component from "../Component/Component.js";
import Service from "../Service/Service.js";

class PokeCard extends Component {
  onePokemonUrl;
  pokemonName;
  pokemonId;
  pokemonImage;
  onePokemon = [];

  constructor(parentElement, className, onePokemonUrl) {
    super(parentElement, className, "li");
    this.onePokemonUrl = onePokemonUrl;

    (async () => {
      const getOnePokemon = new Service(this.onePokemonUrl);
      const showOnePokemon = await getOnePokemon.getData(this.onePokemonUrl);

      this.onePokemon = showOnePokemon;

      this.generateHTML();
    })();
  }

  generateHTML() {
    const pokemonHTML = `<li class="pokemon-card">
            <div class="pokemon-card__pokeball">
              <div></div>
            </div>
            <div class="pokemon-card__image">
              <div></div>
              <img
                src="img/togepi.png"
                alt="Pokemon Togepi"
                width="100px"
                height="100px"
              />
            </div>
            <div class="pokemon-card__main-info">
              <p class="pokemon-card__id"># 001</p>
              <h2 class="pokemon-card__name">Togepi</h2>
            </div>
          </li>`;
    this.element.innerHTML = pokemonHTML;
  }
}

export default PokeCard;
