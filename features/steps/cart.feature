
Feature: Cart management

  As a user
  I want to manage products in the cart
  So that I can prepare my order

  Background:
    Given the user logs in as "standard user"
    And the user is on the Product Page

  Scenario: Add single product to cart
    When the user adds the following products to the cart:
      | productId            |
      | sauce-labs-backpack      |
    Then the cart should contain 1 product

  Scenario: Add multiple products to cart
    When the user adds the following products to the cart:
      | productId            |
      | sauce-labs-backpack      |
      | sauce-labs-bike-light    |
    Then the cart should contain 2 products

  Scenario: Remove product from cart
    Given the user adds the following products to the cart:
      | productId            |
      | sauce-labs-backpack      |
    When the user removes the following products from the cart:
      | productId            |
      | sauce-labs-backpack      |
    Then the cart should contain 0 products
