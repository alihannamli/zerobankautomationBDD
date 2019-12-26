package com.zerobank.pages;


import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class LoginPage extends PageBase{

    public LoginPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(id = "signin_button")
    public WebElement signinButton;

    @FindBy(id="user_login")
    public WebElement username;

    @FindBy(id="user_password")
    public WebElement password;

    @FindBy(css = "input[name=\"submit\"]")
    public WebElement submitButton;

    @FindBy(xpath = "//h3[contains(text(), 'Troubles')]")
    public WebElement troubleMessage;

    @FindBy(xpath = "//div[contains(text(), 'Login and/or')]")
    public WebElement errorMessage;

    public void signin(){
        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        signinButton.click();

    }

    public void login() {
        this.username.sendKeys(ConfigurationReader.get("username"));
        this.password.sendKeys(ConfigurationReader.get("password"));
        submitButton.click();
        BrowserUtils.waitForPageToLoad(5);
    }

    public boolean verifyAccountSummaryPageisDisplayed(){

        String expectedTitle = "Zero - Account Summary";
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Title not matched",expectedTitle, actualTitle);

        boolean verification = expectedTitle.equals(actualTitle);
        return verification;
    }

}
