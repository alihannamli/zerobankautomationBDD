@login
Feature: Login

  @login1
  Scenario: User should be able to login with valid credential
    Given user is already on login page
    When user enters "username" and "password" and clicks Sign in button
    Then user should be on Account Summary Page
    And close browser

    @login2
    Scenario: User should not be able to login with invalid credential
      Given user is already on login page
      When user enters "abc" and "def" and clicks Sign in button
      Then user should not be able to login
      And error message should be displayed

      @login3
      @login2
      Scenario: User should not be able to login with blank credential
        Given user is already on login page
        When user enters "" and "" and clicks Sign in button
        Then user should not be able to login
        And error message should be displayed