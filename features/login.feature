Feature: Blog with Users

  Scenario: As an User, I can login

    Given I am on the login page
    When I login with test1@test.com and YNG>iarqC5wGE~>
    Then I should see logout button
