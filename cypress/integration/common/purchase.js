import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("a user is logged in to Saucedemo", () => {
  cy.loginWith({ email: "user@example.org", password: "this is my password" });
});
Then("the url is {word}", (url) => {
  cy.url().should("eq", `${Cypress.config().baseUrl}${url}`);
});
Then("I'm logged", () => {
  cy.window().its("localStorage.email").should("eq", "user@example.org");
});
