import { BasePage, Button, Link, Label } from "auto-fw/gui";

class ProjectBasePage extends BasePage {
  commonSelectors = {
    burgerMenuButton: "#react-burger-menu-btn",
    logoutLink: "[data-test=logout-sidebar-link]",
    cartButton: "[data-test=shopping-cart-link]",
    cartBadge: "[data-test=shopping-cart-badge]",
  };

  constructor(pageURL = "/inventory.html") {
    super(pageURL);
  }

  get burgerMenuButton() {
    return new Button(this.commonSelectors.burgerMenuButton, "Burger Menu Button");
  }

  get cartBadge() {
    return new Label(this.commonSelectors.cartBadge, "Cart Badge");
  }

  get logoutLink() {
    return new Link(this.commonSelectors.logoutLink, "Logout Link");
  }

  get cartButton() {
    return new Button(this.commonSelectors.cartButton, "Cart Button");
  }
  async clickBurgerMenuButton() {
    await this.burgerMenuButton.click();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }
  async clickLogoutLink() {
    await this.logoutLink.click();
  }

  async getCartBadgeCount() {
    return this.cartBadge.getText();
  }
}
export default ProjectBasePage;
