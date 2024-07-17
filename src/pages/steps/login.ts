import { expect } from "@playwright/test";
import { DriversPage } from "../drivers.page";
import { LoginPage } from "../login.page";
import { goto } from "../navigatable";
import { step } from "../helpers/step";

export class LoginSteps {
    @step('Login user')
    async login(loginPage: LoginPage, driversPage: DriversPage) {
        await goto(loginPage);

        await loginPage.login();

        await goto(driversPage);
        await expect(driversPage.header.userButton).toBeVisible(); 
    }
}