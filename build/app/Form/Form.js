import Component from "../Component/Component";

class Form extends Component {
  pokemonName;
  pokemonType;
  pokemonImage;

  constructor(parentElement, className) {
    super(parentElement, className, "form");
  }

  generateHTML() {
    const formHTML = ``;

    this.element.innerHTML = formHTML;
  }
}

export default Form;
