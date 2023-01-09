import Page from "../pageobjects/page";

class UpdateAddress {

  /**
   *  define selectors values
   */
  
  btnVoegNieuwAdresSelector = '//button[@data-testid="create-address-pvh-icon-button"]';
  toogleGenderMaleSelector = '(//button[@data-testid="pvh-ToggleButton"])[2]';
  inputVoornaamSelector = '#firstName-Bform';
  inputAchternaamSelector = '#lastName-Bform';
  inputStraatSelector = '#address1-Bform';
  inputHuisNummerSelector = '#address2-Bform';
  inputPlaatsSelector = '#city-Bform';
  inputPostCodeSelector = '#zipCode-Bform';
  btnVoegNiewAdresSaveSelector = '//button[@data-testid="address-form-add-pvh-button"]';
  btnBewerkenSelector = '//button[text()="Bewerken"]';

  /**
   * define selectors using getter methods
   */

  get btnVoegNieuwAdres() {
    return $(this.btnVoegNieuwAdresSelector);
  }

  get inputVoornaam() {
    return $(this.inputVoornaamSelector);
  }

  get inputAchternaam() {
    return $(this.inputAchternaamSelector);
  }

  get inputStraat() {
    return $(this.inputStraatSelector);
  }

  get inputHuisNummer() {
    return $(this.inputHuisNummerSelector);
  }

  get inputPlaats() {
    return $(this.inputPlaatsSelector);
  }

  get inputPostCode() {
    return $(this.inputPostCodeSelector);
  }

  get btnVoegNiewAdresSave() {
    return $(this.btnVoegNiewAdresSaveSelector);
  }

  get btnBewerken() {
    return $(btnBewerkenSelector);
  }

  async addAddressDetails(Firstname: string, LastName: string, Street: string, HouseNum: string, Place: string, PostCode:String){
   await this.navigateToAddAdressForm();
    await this.enterUserDetails(Firstname,LastName);
    await this.enterUserAddress(Street,HouseNum,Place,PostCode)
    await this.saveFormDetails();
  }

  
  async navigateToAddAdressForm() {
    Page.navigateTo('/myaccount/addresses');
    await this.btnVoegNieuwAdres.waitForDisplayed();
    await (await this.btnVoegNieuwAdres).click();
  }

  async enterUserDetails(Firstname: string, LastName: string) {
    await this.inputVoornaam.setValue(Firstname);
    await this.inputAchternaam.setValue(LastName);
  }
  async enterUserAddress(Street: string, HouseNum: string, Place: string, PostCode:String) {
    await this.inputStraat.setValue(Street);
    await this.inputHuisNummer.setValue(HouseNum);
    await this.inputPlaats.setValue(Place);
    await this.inputPostCode.setValue(PostCode);
  }
 

  async saveFormDetails() {
    await this.btnVoegNiewAdresSave.click();
  }

  async verifyAddress() {
    await this.btnBewerken.waitForExist({timeout: 5000 });
    await this.btnBewerken.waitForDisplayed();
  }
}
export default new UpdateAddress();
