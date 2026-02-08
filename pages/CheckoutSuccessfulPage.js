import ProjectBasePage from "./ProjectBasePage.js";
import { Label } from "auto-fw/gui";

class CheckoutSuccessfulPage extends ProjectBasePage {
  selectors = {
    pageTitle: "[data-test='title']",
  };

  get pageTitle() {
    return new Label(this.selectors.pageTitle, "Page Title");
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }
}
export default new CheckoutSuccessfulPage();
