 Feature: Verify Login into tommy-hilfiger web appliction
   
  Scenario Outline: Verify user can login successfully with valid user credentails
    Given A user is accessing the application home page
    When He login with '<username>' and '<password>'
    Then He should see my account page
    Examples: 
      | username                     | password  |
      | Testingfreelancer247@gmail.com   | Test1234! |

  Scenario Outline: Verify a user is dispalyed with a proper error message when accessing the application 
    Given A user is accessing the application home page
    When He login with '<username>' and '<password>'
    Then He should see a appropriate '<error message>'

    Examples: 
      | username                   | password        | error message                                                         |
      | Testemail@email.com        | Test            | Je wachtwoord moet tussen 5 en 20 tekens lang zijn                    |
      | Testemail                  | Test1234!       | Sorry, dit is geen geldig e-mailadres                                 |
      |                            | Test1234!       | Vul het veld in                                 |
      | Testemail@email.com        |                 | Vul het veld in                                 |
      |                            |                 | Vul het veld in                                 |
      

