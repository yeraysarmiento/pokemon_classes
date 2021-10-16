import Component from "../Component/Component.js";
import Page from "../Page/Page.js";

class Button extends Component {
  actionOnClick;

  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;

    this.events();
  }

  events() {
    this.element.addEventListener("click", () => this.actionOnClick);
  }
}

export default Button;
