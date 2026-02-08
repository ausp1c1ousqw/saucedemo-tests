import { assertWithLogging } from "auto-fw/gui";
import {
  productPage,
  cartPage,
  checkoutStepOnePage,
  checkoutSuccessfulPage,
  loginPage,
  ProjectBasePage,
} from "../pages";
import { errors, titles } from "../features/fixtures";

class Assertions {
  async verifyProductPage() {
    const actual = await productPage.getPageTitleText();
    const expected = titles.productPage;
    assertWithLogging(actual, expected, "Verify Product Page Opened");
  }

  async verifyLoginError(error) {
    const actual = await loginPage.getLoginErrorText();
    const expected = errors[error];
    assertWithLogging(actual, expected, "Verify Login Error");
  }

  async verifyLoginPage() {
    const actual = await loginPage.getLoginLogoText();
    const expected = titles.loginPage;
    assertWithLogging(actual, expected, "Verify Login Page Opened");
  }

  async verifyNumberOfProductsInCart(expected) {
    const actual = await cartPage.getProductsQuantity();
    assertWithLogging(actual, expected, "Verify Number Of Products");
  }

  async verifyCheckoutSuccessfulPage() {
    const actual = await checkoutSuccessfulPage.getPageTitleText();
    const expected = titles.checkoutSuccessfulPage;
    assertWithLogging(actual, expected, "Verify Checkout Successful Page Opened");
  }

  async verifyCheckoutError(errorType) {
    const actual = await checkoutStepOnePage.getCheckoutErrorText();
    const expected = errors[errorType];
    assertWithLogging(actual, expected, "Verify Checkout Error");
  }

  async verifyCartBadgeCount(expected, pageWithCart = new ProjectBasePage()) {
    const actual = await pageWithCart.getCartBadgeCount();
    assertWithLogging(actual, expected, "Verify Cart Badge Count");
  }

  async verifyCartBadgeNotDisplayed(pageWithCart = new ProjectBasePage()) {
    const actual = await pageWithCart.cartBadge.isVisible();
    const expected = false;
    assertWithLogging(actual, expected, "Verify Visibility");
  }
}
export default new Assertions();
