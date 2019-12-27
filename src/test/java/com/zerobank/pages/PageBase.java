package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageBase {

    @FindBy(css = ".brand")
    @CacheLookup
    public WebElement brandLogo;

    @FindBy(id = "searchTerm")
    public WebElement searchBar;

    @FindBy(xpath = "//li[@class='dropdown'][1]")
    public WebElement settings;

    @FindBy(xpath = "//li[@class='dropdown'][2]")
    public WebElement profile;

    @FindBy(id = "account_summary_tab")
    public WebElement accountSummaryTab;

    @FindBy(id = "account_activity_tab")
    public WebElement accountActivityTab;

    @FindBy(id = "transfer_funds_tab")
    public WebElement transferFundsTab;

    @FindBy(id = "pay_bills_tab")
    public WebElement payBillsTab;

    @FindBy(id = "money_map_tab")
    public WebElement moneyMapTab;

    @FindBy(id = "online_statements_tab")
    public WebElement onlineStatementsTab;

   public PageBase(){
       PageFactory.initElements(Driver.get(), this);
   }

}
