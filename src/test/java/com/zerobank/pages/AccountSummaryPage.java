package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class AccountSummaryPage extends PageBase {
    public AccountSummaryPage(){
        PageFactory.initElements(Driver.get(), this);
    }

//    public boolean verifyTitle(){
//        String actualTitle = Driver.get().getTitle();
//        return actualTitle.;
//    }
}
