import Page from "./Page.js";

describe("Given the class Page", () => {
  describe("When it receives a 'app-container", () => {
    test("Then it should create an <div> element inside 'app-container' with a class named 'container'", () => {
      // Arrange
      const parentElement = ".app-container";
      const className = "container";

      // Act
      // eslint-disable-next-line no-new
      new Page(parentElement);
      const result = parentElement.querySelector(className);

      // Assert
      expect(result).not.toBeNull();
    });
  });
});
