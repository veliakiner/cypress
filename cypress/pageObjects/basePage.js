
class BasePage {
  basketButton() {
    return cy.get("#shopping_cart_container");
  }

  goToBasket() {
    return this.basketButton().click();
  }
}

export default BasePage