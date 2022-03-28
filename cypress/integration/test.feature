@smoke
Feature: Quick Cypress Sanity Test

  Scenario: Search Google.com
    Given I am on the Google homepage
    When I search "cypress"
    Then I should see "Cypress" in the search results
