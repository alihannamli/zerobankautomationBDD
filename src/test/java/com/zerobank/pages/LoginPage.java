package com.zerobank.pages;

import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class LoginPage extends PageBase{

    @FindBy(id = "signin_button")
    public WebElement singinButton;

    @FindBy(id = "user_login")
    public WebElement loginBar;

    @FindBy(id = "user_password")
    public WebElement passwordBar;

    @FindBy(xpath = "//input[@type='submit']")
    public WebElement signinSubmit;

    public void openUrl(){
        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public void login(){
        singinButton.click();
        loginBar.sendKeys(ConfigurationReader.get("username"));
        passwordBar.sendKeys(ConfigurationReader.get("password"));
        signinSubmit.click();

    }


    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

}
