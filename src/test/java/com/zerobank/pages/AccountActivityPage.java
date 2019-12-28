package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AccountActivityPage extends PageFactory {

    public AccountActivityPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "aa_accountId")
    public WebElement accountTypeBar;

    public boolean accountBarDisplayedVerify(String string){
        Select s = new Select(accountTypeBar);
        String actual = s.getFirstSelectedOption().getText();
        return actual.equals(string);
    }


}
