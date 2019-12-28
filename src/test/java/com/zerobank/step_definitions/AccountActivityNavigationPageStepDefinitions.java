package com.zerobank.step_definitions;

import com.zerobank.pages.AccountActivityPage;
import com.zerobank.pages.AccountSummaryPage;
import com.zerobank.pages.LoginPage;
import com.zerobank.pages.PageBase;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AccountActivityNavigationPageStepDefinitions {

    LoginPage loginPage = new LoginPage();
    AccountSummaryPage accountSummaryPage = new AccountSummaryPage();
    AccountActivityPage accountActivityPage = new AccountActivityPage();

    @Given("the user is logged in {string} {string}")
    public void the_User_Is_Logged_In(String arg0, String arg1) {
        loginPage.openUrl();
        loginPage.loginPositive(ConfigurationReader.get("username"), ConfigurationReader.get("password"));
    }

    @When("the user clicks on {string} link on the Account Summary page")
    public void the_user_clicks_on_link_on_the_Account_Summary_page(String string) {
        accountSummaryPage.clickAccountButton(string);
    }

    @Then("the Account Activity page should be displayed")
    public void the_Account_Activity_page_should_be_displayed() {
        accountSummaryPage.accountActivityDisplayed();
    }

    @And("Account drop down should have {string} selected")
    public void accountDropDownShouldHaveSelected(String string) {
        Assert.assertTrue("Default value didn't match", accountActivityPage.accountBarDisplayedVerify(string));
        Driver.closeDriver();
    }


    @Then("Account drop down should have Brokerage selected")
    public void account_drop_down_should_have_Brokerage_selected() {

    }

    @When("the user clicks on Checking link on the Account Summary page")
    public void the_user_clicks_on_Checking_link_on_the_Account_Summary_page() {

    }

    @Then("Account drop down should have Checking selected")
    public void account_drop_down_should_have_Checking_selected() {

    }

    @When("the user clicks on Credit card link on the Account Summary page")
    public void the_user_clicks_on_Credit_card_link_on_the_Account_Summary_page() {

    }

    @Then("Account drop down should have Credit Card selected")
    public void account_drop_down_should_have_Credit_Card_selected() {

    }

    @When("the user clicks on Loan link on the Account Summary page")
    public void the_user_clicks_on_Loan_link_on_the_Account_Summary_page() {

    }

    @Then("Account drop down should have Loan selected")
    public void account_drop_down_should_have_Loan_selected() {

    }


    @When("the user clicks on {string} card link on the Account Summary page")
    public void the_user_clicks_on_card_link_on_the_Account_Summary_page(String string) {

    }

}
