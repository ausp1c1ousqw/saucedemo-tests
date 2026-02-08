import ProjectBasePage from "./ProjectBasePage.js";
import { Button } from "auto-fw/gui";

class CheckoutStepTwoPage extends ProjectBasePage {
  selectors = {
    finishButton: "[data-test='finish']",
  };

  get finishButton() {
    return new Button(this.selectors.finishButton, "Finish Button");
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }
}
export default new CheckoutStepTwoPage();
