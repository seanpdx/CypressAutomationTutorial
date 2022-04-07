@smoke
Feature: Quick Cypress Sanity Test

  Scenario: Search Google.com
    Given I am on the Google homepage
    When I search "cypress docs"
    Then I should see "Cypress Documentation" in the search results
