import { Given, When, Then } from "@cucumber/cucumber";
import assertions from "../../businessClasses/Assertions.js";
import actions from "../../businessClasses/Actions.js";

Then(/^the cart should contain (\d+) products?$/, async (number) => {
  await actions.openCartPage();
  await assertions.verifyNumberOfProductsInCart(number);
});

When("the user adds the following products to the cart:", async (dataTable) => {
  const products = dataTable.hashes();
  for (const { productId } of products) {
    await actions.addToCart(productId);
  }
});

When("the user removes the following products from the cart:", async (dataTable) => {
  const products = dataTable.hashes();
  for (const { productId } of products) {
    await actions.removeFromCart(productId);
  }
});

Given("the user is on the Product Page", async () => {
  await actions.openProductPage();
});
