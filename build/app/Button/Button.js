import Component from "../Component/Component.js";

class Button extends Component {
  actionOnClick;

  constructor(parentElement, actionOnClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;

    this.events();
  }

  events() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default Button;
