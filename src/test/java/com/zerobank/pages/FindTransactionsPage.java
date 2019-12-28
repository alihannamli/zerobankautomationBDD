package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FindTransactionsPage {

    public FindTransactionsPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    AccountActivityPage accountActivityPage = new AccountActivityPage();

    @FindBy (xpath = "//a[text()='Find Transactions']")
    public WebElement findTransactions;

    @FindBy(id = "aa_description")
    public WebElement description;

    @FindBy ( id = "aa_fromDate")
    public WebElement fromDate;

    @FindBy ( id = "aa_toDate")
    public WebElement toDate;

    @FindBy( id = "//button[@type='submit']")
    public WebElement findButton;

    @FindBy(xpath = "//div[@id='filtered_transactions_for_account']/table/tbody/tr/td[1]")
    public List<WebElement> dates;


}
