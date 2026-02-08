import { Then } from "@cucumber/cucumber";
import assertions from "../../businessClasses/Assertions.js";
import actions from "../../businessClasses/Actions.js";

Then("the cart badge should display {string}", async (number) => {
  await actions.waitUntilBadgeCountEquals(number);
  await assertions.verifyCartBadgeCount(number);
});

Then("the cart badge should not be displayed", async () => {
  await assertions.verifyCartBadgeNotDisplayed();
});
