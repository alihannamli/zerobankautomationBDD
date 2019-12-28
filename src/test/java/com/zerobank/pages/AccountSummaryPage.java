package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountSummaryPage extends PageBase {

    public AccountSummaryPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    public void clickAccountButton(String string){
        Driver.get().findElement(By.xpath("//a[text()='"+string+"']")).click();
    }

    public boolean accountActivityDisplayed(){
        String accountActivityTitle = Driver.get().getTitle();
        String actualTitle = "Zero - Account Activity";
        return accountActivityTitle.equals(actualTitle);
    }

}
