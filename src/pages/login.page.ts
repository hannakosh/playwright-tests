import { Base } from "./base";
import { Navigatable } from "./navigatable";

export  class LoginPage extends Base implements Navigatable {
  readonly emailField = this.getByType('email');  
  readonly passwordField = this.getByType('password');  
  readonly loginButton = this.getByType('button');  
  readonly wrongCredentialsMessage = this.getByText('Wrong Email or password');

  async login(password: string) {
    await this.page.goto(this.url());
    await this.emailField.fill(`${process.env.LOGIN_USER_EMAIL}`);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  url() {
    return '/login';
  }

  async waitForLoadState() {}
}
