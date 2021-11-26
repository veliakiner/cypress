import BasePage from "./basePage";

class ConfirmationPage extends BasePage {
  submitShippingDetails(firstName, lastName, postalCode) {
    // TODO split up into separate objects
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(postalCode);
    cy.get("#continue").click();
  }

  returnToProductsButton() {
    return cy.get("#back-to-products");
  }

  confirmationMessage() {
      return cy.get("#checkout_complete_container")
  }
}
export default new ConfirmationPage();
