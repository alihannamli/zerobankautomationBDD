package com.zerobank.step_definitions;

import com.zerobank.pages.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginPageStepDefinitions {

    LoginPage loginPage = new LoginPage();

    @Given("user is already on home page")
    public void user_is_already_on_home_page() {
        loginPage.signin();
    }

    @When("user enters {string} and {string} and clicks Sign in button")
    public void user_enters_and_and_clicks_Sign_in_button() {
        loginPage.login();

    }

    @Then("user should be on Account Summary Page")
    public void user_should_be_on_Account_Summary_Page() {
        Assert.assertTrue("Title not matched", loginPage.verifyAccountSummaryPageisDisplayed());

    }


    @Then("user should not be able to login")
    public void user_should_not_be_able_to_login() {

    }

    @Then("error message should be displayed")
    public void error_message_should_be_displayed() {

    }

    @And("close browser")
    public void closeBrowser() {

    }


}