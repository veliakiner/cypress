import BasePage from "./basePage";

class BasketPage extends BasePage {
  checkoutButton() {
    return cy.get("#checkout");
  }

  checkout() {
    return this.checkoutButton().click()
  }
}
export default new BasketPage();
