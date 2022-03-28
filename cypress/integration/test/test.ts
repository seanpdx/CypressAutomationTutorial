
import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import GoogleActions from "../actions/google/google";

Given("I am on the Google homepage", () => {
  cy.visit("https://www.google.com/");
  cy.title().should("eq", "Google");
});

When("I search {string}", (searchTerm) => {
  GoogleActions.searchGoogle(searchTerm);
  
});


Then("I should see {string} in the search results", (searchTerm) => {

});

