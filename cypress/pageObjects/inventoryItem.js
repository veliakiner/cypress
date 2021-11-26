class InventoryItem {
  constructor(index) {
    this.index = index; // 1-indexed, in keeping with css selector convention
    this.baseSelector =
      ".inventory_item" +
      (this.index === -1 ? ":last-of-type" : `:nth-of-type(${this.index})`);
  }
  addToBasketButton() {
    return cy.get(this.baseSelector + " .btn_inventory");
  }

  addToBasket() {
    return this.addToBasketButton().click();
  }
}
export default InventoryItem;
