import { Given, When, Then } from "@cucumber/cucumber";
import assertions from "../../businessClasses/Assertions.js";
import actions from "../../businessClasses/Actions.js";

Given("the user is on the checkout page", async () => {
  await actions.openCheckoutPage();
});

When("the user submit checkout form with {string} personal information", async (infoType) => {
  await actions.submitCheckoutForm(infoType);
});

When("finish checkout", async () => {
  await actions.finishCheckout();
});

Then("the checkout should be completed successfully", async () => {
  await assertions.verifyCheckoutSuccessfulPage();
});

Then("an {string} should be displayed on CheckoutPage", async (errorType) => {
  await assertions.verifyCheckoutError(errorType);
});
