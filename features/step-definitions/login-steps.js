import { When, Then } from "@cucumber/cucumber";
import auth from "../../businessClasses/Auth.js";
import assertions from "../../businessClasses/Assertions.js";

When("the user logs in as {string}", async (userType) => {
  await auth.loginAs(userType);
});

Then("the products page should be displayed", async () => {
  await assertions.verifyProductPage();
});

Then("an {string} should be displayed", async (error) => {
  await assertions.verifyLoginError(error);
});

Then("the login page should be displayed", async () => {
  await assertions.verifyLoginPage();
});
