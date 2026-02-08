
Feature: User logout

  As an authenticated user
  I want to log out
  So that my session is closed

  Background:
    Given the user logs in as "standard user"

  Scenario: Successful logout
    When the user logs out
    Then the login page should be displayed