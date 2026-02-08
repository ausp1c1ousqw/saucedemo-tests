import { loginPage, ProjectBasePage } from "../pages";
import { users } from "../features/fixtures";

class Auth {
  async loginAs(userType) {
    await loginPage.open();
    await loginPage.enterUsername(users[userType].username);
    await loginPage.enterPassword(users[userType].password);
    await loginPage.clickLoginButton();
  }
  async logout(pageWithMenu = new ProjectBasePage()) {
    await pageWithMenu.clickBurgerMenuButton();
    await pageWithMenu.clickLogoutLink();
  }
}
export default new Auth();
