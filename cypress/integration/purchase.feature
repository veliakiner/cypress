Feature: Shopping cart
    Scenario: User purchases two items
        Given a user is logged in to Saucedemo
        And the products for sale are sorted by price descending
        When the user adds the cheapest and costliest items to the basket
        And the user checks out their basket
        And the user supplies their shipping details
        And the user submits their purchase
        Then the user sees a dispatch confirmation
        And the user sees an option to navigate to the home page
