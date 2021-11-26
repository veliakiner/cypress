
class BasePage {
  url = cy.config().baseUrl + "/inventory.html";

  basketButton() {
    return cy.get("#shopping_cart_container");
  }

  goToBasket() {
    return this.basketButton().click();
  }
}

export default BasePage