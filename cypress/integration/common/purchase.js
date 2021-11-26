import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BasketPage from "../../pageObjects/basketPage";
import checkoutPage from "../../pageObjects/checkoutPage";
import ConfirmationPage from "../../pageObjects/confirmationPage";
import InventoryPage from "../../pageObjects/inventoryPage";
import LoginPage from "../../pageObjects/loginPage";

Given("a user is logged in to Saucedemo", () => {
  cy.visit("/");
  cy.fixture("user").then((user) => {
    LoginPage.login(user.username, user.password);
    cy.url().should("eq", InventoryPage.url);
  });
});
Given("the products for sale are sorted by price descending", () => {
  InventoryPage.sortProductsHighToLow();
});
When("the user adds the cheapest and costliest items to the basket", () => {
  InventoryPage.firstItem().addToBasketButton().click();
  InventoryPage.lastItem().addToBasketButton().click();
});
When("the user checks out their basket", () => {
  InventoryPage.basketButton().click();
  BasketPage.checkoutButton().click();
});
When("the user supplies their shipping details", () => {
  checkoutPage.submitShippingDetails("Flava", "Flav", "12345");
});
When("the user submits their purchase", () => {
  checkoutPage.completePurchaseButton().click();
});
Then("the user sees a dispatch confirmation", () => {
  ConfirmationPage.confirmationMessage()
    .should("be.visible")
    .contains("THANK YOU FOR YOUR ORDER");
});
Then("the user sees an option to navigate to the home page", () => {
  ConfirmationPage.returnToProductsButton().should("be.visible").click();
  cy.url().should("eq", InventoryPage.url);
});
Then("the user's cart is empty", () => {
  // TODO
});
