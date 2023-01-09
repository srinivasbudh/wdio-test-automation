import Page from "../pageobjects/page";

class HomePage {
  
  /**
   * define selectors values
   */
  btnAcceptAllSelector = '//button[@data-testid="Button-primary" and contains(@class,"cookie-notice__agree-button")]'
  btnLoginSelector = 'button=Aanmelden / Registreren';
  
  /**
   * define selectors using getter methods
   */
  get btnAcceptAll() {
    return $(this.btnAcceptAllSelector);
  }

  get btnLogin() {
    return $(this.btnLoginSelector);
  }

  /**
   * Accept if any cookies on web page
   */
  async acceptAllCookies() {
   await browser.pause(1000);
    if ( await Page.checkIfElementExists(this.btnAcceptAllSelector)) {
      this.btnAcceptAll.click();
    }
  }

  /**
   * Open Login form
   */
  async navigateToLoginForm() {
    await this.btnLogin.waitForDisplayed();
    await this.btnLogin.waitForExist({timeout:30000});
    await this.btnLogin.click();
  }
}

export default new HomePage();


