import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../../pageObjects/inventoryPage";
import LoginPage from "../../pageObjects/loginPage";


Given("a user is logged in to Saucedemo", () => {
  cy.visit("/");
  cy.fixture("user").then((user) => {
    LoginPage.login(user.username, user.password)
    cy.url().should("eq", InventoryPage.url);
  });
});
Given("the products for sale are sorted by price descending", () => {
  InventoryPage.sortProductsHighToLow();
});
When("the user adds the cheapest and costliest items to the basket", () => {
  cy.get(".inventory_item:last-of-type .btn_inventory").click();
  cy.get(".inventory_item:first-of-type .btn_inventory").click();
});
When("the user checks out their basket", () => {
  cy.get("#shopping_cart_container").click();
  cy.get("#checkout").click();
});
When("the user supplies their shipping details", () => {
  cy.get("#first-name").type("Joe");
  cy.get("#last-name").type("Bloggs");
  cy.get("#postal-code").type("12345");
  cy.get("#continue").click();
});
When("the user submits their purchase", () => {
  cy.get("#finish").click();
});
Then("the user sees a dispatch confirmation", () => {
  cy.get("#checkout_complete_container")
    .should("be.visible")
    .contains("THANK YOU FOR YOUR ORDER");
});
Then("the user sees an option to navigate to the home page", () => {
  cy.get("#back-to-products").should("be.visible").click();
  cy.url().should("eq", cy.config().baseUrl + "/inventory.html");
});
