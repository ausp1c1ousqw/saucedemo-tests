import ProjectBasePage from "./ProjectBasePage.js";
import { Button } from "auto-fw/gui";

class CartPage extends ProjectBasePage {
  selectors = {
    cartProduct: "[data-test='inventory-item']",
    removeButton: (productId) => `[data-test='remove-${productId}']`,
  };
  constructor() {
    super("/cart.html");
  }
  getRemoveButtonFor(productId) {
    return new Button(this.selectors.removeButton(productId), "Remove Button");
  }

  async getProductsQuantity() {
    const cartProducts = await $$(this.selectors.cartProduct);
    return cartProducts.length;
  }

  async clickRemoveButtonFor(productId) {
    await this.getRemoveButtonFor(productId).click();
  }
}
export default new CartPage();
