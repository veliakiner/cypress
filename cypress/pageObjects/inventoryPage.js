import BasePage from "./basePage";
import inventoryItem from "./inventoryItem";

class InventoryPage extends BasePage {
  url = cy.config().baseUrl + "/inventory.html";

  checkoutButton() {
    return cy.get("#checkout");
  }

  orderProductsDropdown() {
    return cy.get('[data-test="product_sort_container"]');
  }

  sortProductsHighToLow() {
    return this.orderProductsDropdown().select("hilo");
  }

  nthItem(index) {
    return new inventoryItem(index);
  }

  firstItem() {
    return this.nthItem(1);
  }

  lastItem() {
    return this.nthItem(-1);
  }
}
export default new InventoryPage();
