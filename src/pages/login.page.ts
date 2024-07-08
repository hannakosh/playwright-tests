import { expect } from "@playwright/test";
import { Base } from "./base";


export  class LoginPage extends Base {
  readonly emailField = this.getByType('email');  
  readonly passwordField = this.getByType('password');  
  readonly loginButton = this.getByType('button');  
  readonly wrongCredentialsMessage = this.getByText('Wrong Email or password');

  async login(password: string) {
    await this.page.goto('https://dev.omni-dispatch.com/login');
    await this.emailField.fill(`${process.env.LOGIN_USER_EMAIL}`);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}