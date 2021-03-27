const CHANGE_TYPE = {
  UP: "UP",
  DOWN: "DOWN",
};
const ERROR_TYPE = {
  NOT_FOUND: "NOT_FOUND",
  NOT_POSSIBLE: "NOT_POSSIBLE",
  INVALID_INPUT: "INVALID_INPUT",
};
const numbers = [4, 6, 10, 23, 0, 24, 30, 2];

const itemInput = "#item-input";
const countInput = "#count-input";
const btn = "#submit-btn";
const error = "#error";

const checkValues = (items = numbers) => {
  cy.get("#numbers-container")
    .find("span")
    .then(($el) => {
      expect($el).to.have.length(items.length);
      items.forEach((el, idx) => {
        expect($el[idx]).to.have.text(el.toString());
      });
    });
};

const checkError = (errorType) => {
  cy.get(error).contains(errorType);
};

describe("Moving Array Sample Tests:", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("Moving functionality should be correct", () => {
    const newNumbers = [4, 6, 10, 23, 24, 30, 0, 2];
    cy.get(itemInput).invoke("attr", "value", "0");
    cy.get(countInput).invoke("attr", "value", "2");
    cy.get(btn).click();
    checkValues(newNumbers);
  });

  it("Error handling", () => {
    cy.get(itemInput).invoke("attr", "value", "66");
    cy.get(countInput).invoke("attr", "value", "3");
    cy.get(btn).click();
    checkError(ERROR_TYPE.NOT_FOUND);
    cy.get(itemInput).invoke("attr", "value", "4");
    cy.get(countInput).invoke("attr", "value", "10");
    cy.get(btn).click();
    checkError(ERROR_TYPE.NOT_POSSIBLE);
  });
});
