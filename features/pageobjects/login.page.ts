/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors values
   */

    inputEmailSelector = '#signin-email';
    inputWachtwoordSelector = '#signin-password';
    btnAanmeldenSelector = 'form[data-testid="authentication-form"] button[type="submit"]';
    lnkMijnAccountSelector = '.header-my-account-wrapper_2KeJf'
  
  /**
   * define selectors using getter methods
   */
  get inputEmail() {
    return $(this.inputEmailSelector);
  }

  get inputWachtwoord() {
    return $(this.inputWachtwoordSelector);
  }

  get btnAanmelden() {
    return $(this.btnAanmeldenSelector);
  }

  get lnkMijnAccount() {
    return $(this.lnkMijnAccountSelector);
  }

  /**
   * Login into application using
   * @param email 
   * @param wachtwoord 
   */
  async login(email: string, wachtwoord: string) {
    await this.inputEmail.setValue(email);
    await this.inputWachtwoord.setValue(wachtwoord);
    await this.btnAanmelden.click();
  }
}

export default new LoginPage();
