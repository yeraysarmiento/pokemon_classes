import Component from "../Component/Component";

class Page extends Component{


  constructor(parentElement){
    super(parentElement,"container");
  
    this.generateHTML();

    const controlsSection = this.element.querySelector(".controls");

    const info = new Info(controlsSection,
     { total= this.totalSelected.filter((gentleman) => gentleman.selected).length });

    const button = new Button (controlsSection, {text: "Select all", actionOnClick: () => this.onClickButton}); //La invocamos porque uando alguien la ejecute tiene que llamar a la otra
  }


  onClickButton(){
    console.log(`Click ${this.totalSelected}`);
  }

  generateHTML(){
    const html= 
    //html container <header>...
    this.element.innerHTML = html;

    const gentlemenContainer= document.querySelector(".gentlemen");
    this.gentlemen.map( (gentleman) => {
    return new Gentleman(gentlemenContainer, gentleman); //Por cada objeto de java script me devuelve un componente gentleman y cada vez le paso un objeto distinto
  })

  }

}