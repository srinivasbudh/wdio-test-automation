Feature: Verify user can update his account address

  Scenario Outline: Verify user can add new address after login
    Given A user is accessing the application home page
    When He login with 'Testingfreelancer247@gmail.com' and 'Test1234!'
    And He Adds new account details <Firstname> , <Lastname> , <Street> , <HouseNum> , <Place> , <PostCode>
    Then Address details are Added
    Examples:
    | Firstname | Lastname | Street             | HouseNum | Place     | PostCode |
    | Test      | User     | High Street        |  100     | Amsterdam |  1186GG |