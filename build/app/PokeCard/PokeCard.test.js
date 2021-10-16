import PokeCard from "./PokeCard.js";

describe("Given the class PokeCard", () => {
  describe("When it receives a 'app' and a 'pokemon-card'", () => {
    test("Then it should create a 'li' element with the class 'pokemon-card'", () => {
      // Arrange
      const parentElement = ".app";
      const className = "pokemon-card";

      // Act
      // eslint-disable-next-line no-new
      new PokeCard(parentElement, className);
      const result = parentElement.querySelector(className);

      // Assert
      expect(result).not.toBeNull();
    });
  });
});
