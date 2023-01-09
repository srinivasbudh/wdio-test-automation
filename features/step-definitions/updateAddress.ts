import { When, Then} from "@wdio/cucumber-framework";
import Address from "../pageobjects/updateAddress.page";


  When (/^He Adds new account details (.*) , (.*) , (.*) , (.*) , (.*) , (.*)$/, async (firstName, lastName, street, houseNum, place, postCOde) => {
    await Address.addAddressDetails(firstName,lastName,street,houseNum,place,postCOde)
  });

  Then(/^Address details are Added$/, async () => {
    await Address.verifyAddress();
  });