const { caesarCipher } = require("./caesarCipher.js");

describe("Tests caeserCipher()", () => {
  test("Test caesarCipher('Boy! What a string!', -5) == 'Wjt! Rcvo v nomdib!'", () => {
    expect(caesarCipher("Boy! What a string!", -5)).toBe("Wjt! Rcvo v nomdib!");
  });
  test("Test caesarCipher('Hello zach168! Yes here.', 5) == 'Mjqqt efhm168! Djx mjwj.'", () => {
    expect(caesarCipher("Hello zach168! Yes here.", 5)).toBe(
      "Mjqqt efhm168! Djx mjwj."
    );
  });
  test("Test caesarCipher('Hello Zach168! Yes here.', -5) == 'Czggj Uvxc168! Tzn czmz.'", () => {
    expect(caesarCipher("Hello Zach168! Yes here.", -5)).toBe(
      "Czggj Uvxc168! Tzn czmz."
    );
  });
});
