Feature: Playwright website

Scenario: Has Title
    Given I am at the playwright website
    Then the title has the text "Playwright"

Scenario: Get Started Link
    Given I am at the playwright website
    When I click at "Get Started"
    Then the URL has the text "intro"