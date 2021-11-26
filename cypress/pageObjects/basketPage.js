import BasePage from "./basePage";

class BasketPage extends BasePage {
  checkoutButton() {
    return cy.get("#checkout");
  }

  checkout() {
    return this.checkoutButton().click()
  }

  items() {
    return cy.get(".cart_list").find('.cart_item')
  }
}
export default new BasketPage();
