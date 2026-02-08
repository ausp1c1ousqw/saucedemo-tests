import {
  productPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  ProjectBasePage,
} from "../pages";
import { infos } from "../features/fixtures";
import { waitUntil } from "auto-fw/gui";

class Actions {
  async addToCart(productId) {
    await productPage.clickAddToCartButtonFor(productId);
  }

  async waitUntilBadgeCountEquals(expected, pageWithCart = new ProjectBasePage()) {
    await waitUntil(
      async () => (await pageWithCart.getCartBadgeCount()) === expected,
      `cart badge count is ${expected}`,
    );
  }

  async removeFromCart(productId) {
    await cartPage.clickRemoveButtonFor(productId);
  }

  async openProductPage() {
    await productPage.open();
  }

  async openCartPage() {
    await cartPage.open();
  }

  async openCheckoutPage() {
    await checkoutStepOnePage.open();
  }

  async submitCheckoutForm(infoType) {
    await checkoutStepOnePage.enterFirstName(infos[infoType].firstName);
    await checkoutStepOnePage.enterLastName(infos[infoType].lastName);
    await checkoutStepOnePage.enterPostalCode(infos[infoType].postalCode);
    await checkoutStepOnePage.clickContinueButton();
  }

  async finishCheckout() {
    await checkoutStepTwoPage.clickFinishButton();
  }
}
export default new Actions();
