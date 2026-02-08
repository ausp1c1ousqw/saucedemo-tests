import { Label, Button } from "auto-fw/gui";
import ProjectBasePage from "./ProjectBasePage";

class ProductPage extends ProjectBasePage {
  selectors = {
    pageTitle: "[data-test='title']",
    addToCartButton: (productId) => `[data-test="add-to-cart-${productId}"]`,
  };

  constructor() {
    super("/inventory.html");
  }

  getAddToCartButtonFor(productId) {
    return new Button(
      this.selectors.addToCartButton(productId),
      `Add To Cart Button on ${productId}`,
    );
  }

  get pageTitle() {
    return new Label(this.selectors.pageTitle, "Product Page Title");
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }

  async clickAddToCartButtonFor(productId) {
    await this.getAddToCartButtonFor(productId).click();
  }
}
export default new ProductPage();
