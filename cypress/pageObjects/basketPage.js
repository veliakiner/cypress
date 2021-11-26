import BasePage from "./basePage";

class BasketPage extends BasePage {
  url = cy.config().baseUrl + "/inventory.html";

  checkoutButton() {
    return cy.get("#checkout");
  }

  checkout() {
    return this.checkoutButton().click()
  }
}
export default new BasketPage();
