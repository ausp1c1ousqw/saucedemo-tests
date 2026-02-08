import { When } from "@cucumber/cucumber";
import auth from "../../businessClasses/Auth.js";

When("the user logs out", async () => {
  await auth.logout();
});
