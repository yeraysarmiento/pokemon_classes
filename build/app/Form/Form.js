import Component from "../Component/Component.js";

class Form extends Component {
  pokemonName;
  pokemonType;
  pokemonImage;

  constructor(parentElement, className) {
    super(parentElement, className, "form");

    this.generateHTML();
  }

  generateHTML() {
    const formHTML = `
      <div class="form-container">
        <h3>CREATE YOUR OWN POKEMON!</h3>
        <p>NAME:</p>
        <input type="text" name="pokemonName">
        <p>IMAGE URL:</p>
        <input type="url" name="pokemonImage"></input>
        <p>TYPE:</p>
        <select name="menu">
            <option value="0"></option>
            <option value="1">Water</option>
            <option value="2">Grass</option>
            <option value="3">Fire</option>
            <option value="3">Electric</option>
        </select>
      </div>
        <p>
            <input type="reset" value="">
            <input type="submit" value="">
        </p>
`;

    this.element.innerHTML = formHTML;
  }
}

export default Form;
