import BasePage from "./basePage";

class CheckoutPage extends BasePage {
  submitShippingDetails(firstName, lastName, postalCode) {
    // TODO split up into separate objects
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(postalCode);
    cy.get("#continue").click();
  }

  completePurchaseButton() {
    return cy.get("#finish");
  }

  completePurchase() {
    return this.completePurchaseButton().click();
  }
}
export default new CheckoutPage();
