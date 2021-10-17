import Component from "../Component/Component.js";
import Card from "../PokeCard/PokeCard.js";

class Form extends Component {
  pokemonName;
  pokemonType;
  pokemonImage;

  constructor(parentElement, className) {
    super(parentElement, className, "li");

    this.generateHTML();

    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => this.getFormInformation());
  }

  generateHTML() {
    const formHTML = `
    <form name="formData">
      <div class="form-container">
        <h3>CREATE YOUR OWN POKEMON!</h3>
        <p>NAME:</p>
        <input type="text" name="pokemonName" id="name">
        <p>IMAGE URL:</p>
        <input type="url" name="pokemonImage" id="image"></input>
        <p>TYPE:</p>
        <select name="menu" id="type">
            <option value="0"></option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="electric">Electric</option>
        </select>
      </div>
        <p>
            <input type="reset" value="">
            <input type="submit" value="" id="submit">
        </p>
        </form>
`;

    this.element.innerHTML = formHTML;
  }

  getFormInformation() {
    event.preventDefault();
    let formName = document.getElementById("name").value;
    let formImage = document.getElementById("image").value;
    let formType = document.getElementById("type").value;

    document.formData.pokemonName.value = formName;
    document.formData.pokemonImage.value = formImage;

    const parentElement = document.querySelector(".gallery");
    let element = document.createElement("li");

    let classElement = `pokemon-card ${formType}`;

    element.className = classElement;
    parentElement.append(element);

    const pokemonHTML = `
            <div class="pokemon-card__pokeball">
              <div class="catched"></div>
              <div class="pokemon-card__delete-button"></div>
            </div>
            <div class="pokemon-card__image">
              <div></div>
              <img
                src="${formImage}"
                alt="Pokemon Togepi"
                width="100px"
                height="100px"
              />
            </div>
            <div class="pokemon-card__main-info">
              <p class="pokemon-card__id"># 100</p>
              <h2 class="pokemon-card__name">${formName}</h2>
            </div>
            `;

    element.innerHTML = pokemonHTML;
  }
}

export default Form;
