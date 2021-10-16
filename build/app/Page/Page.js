import Component from "../Component/Component.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "container");

    this.generateHTML();

    /* const controlsSection = this.element.querySelector(".controls");

    const info = new Info(controlsSection,
     { total= this.totalSelected.filter((gentleman) => gentleman.selected).length });

    const button = new Button (controlsSection, {text: "Select all", actionOnClick: () => this.onClickButton}); */
  }

  onClickButtonLeft() {}

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
