import PokeCard from "./PokeCard.js";

describe("Given the class PokeCard", () => {
  describe("When it receives a 'app' and a 'pokemon-card'", () => {
    test("Then it should create a 'li' element with the class 'pokemon-card' in 'app", () => {
      // Arrange
      const parentElement = document.querySelector("app");
      const className = ".pokemon-card";
      const element = document.createElement("li");

      // Act
      // eslint-disable-next-line no-new
      new PokeCard(parentElement, className);
      const result = parentElement.querySelector("li.pokemon-card");

      // Assert
      expect(result).not.toBeNull();
    });
  });
});
