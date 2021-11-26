class InventoryPage {
  url = cy.config().baseUrl + "/inventory.html";

  orderProductsDropdown() {
    return cy.get('[data-test="product_sort_container"]');
  }

  sortProductsHighToLow() {
    return this.orderProductsDropdown().select("hilo");
  }


}
export default new InventoryPage();
