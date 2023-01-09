import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import allureReporter from '@wdio/allure-reporter'

Given(/^A user is accessing the application home page$/, async () => {
  await HomePage.acceptAllCookies()
  await HomePage.navigateToLoginForm();
});

When(/^He login with '(.*)' and '(.*)'$/, async (username, password) => {
  allureReporter.addArgument('username', username)
  await LoginPage.login(username, password);
  await (await LoginPage.btnAanmelden).waitForClickable();
  await LoginPage.btnAanmelden.waitForExist({timeout:50000});
  await (await LoginPage.btnAanmelden).click();
});

Then(/^He should see a appropriate (.*)$/, async (message) => {
  const msg = $('//p[text()= '+ message +']');
  await expect(msg).toBePresent();
  await expect(msg).toBeDisplayed();
});


Then(/^He should see my account page$/, async () => {
  await LoginPage.lnkMijnAccount.waitForDisplayed();
  await expect(LoginPage.lnkMijnAccount).toBePresent();
  await (await LoginPage.lnkMijnAccount).click();
});
