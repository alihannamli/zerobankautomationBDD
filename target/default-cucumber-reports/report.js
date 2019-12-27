$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating to specific accounts in Accounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.scenario({
  "name": "Savings account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.step({
  "name": "the user is logged in \"username\" \"password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Savings link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_user_clicks_on_Savings_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have Savings selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.account_drop_down_should_have_Savings_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.step({
  "name": "the user is logged in \"username\" \"password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#signin_button\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alihans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:443:22e2:7346:6d1d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/_2/2_fzmn013pz...}, goog:chromeOptions: {debuggerAddress: localhost:50366}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88c6b3abf01778ff951f277eb765af29\n*** Element info: {Using\u003did, value\u003dsignin_button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.zerobank.pages.LoginPage.login(LoginPage.java:31)\n\tat com.zerobank.step_definitions.AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(AccountActivityNavigationPageStepDefinitions.java:15)\n\tat ✽.the user is logged in \"username\" \"password\"(file:src/test/resources/features/AccountActivityNavigation.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Brokerage link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Account drop down should have Brokerage selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.account_drop_down_should_have_Brokerage_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Checking account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.step({
  "name": "the user is logged in \"username\" \"password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#signin_button\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alihans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:443:22e2:7346:6d1d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/_2/2_fzmn013pz...}, goog:chromeOptions: {debuggerAddress: localhost:50366}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88c6b3abf01778ff951f277eb765af29\n*** Element info: {Using\u003did, value\u003dsignin_button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.zerobank.pages.LoginPage.login(LoginPage.java:31)\n\tat com.zerobank.step_definitions.AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(AccountActivityNavigationPageStepDefinitions.java:15)\n\tat ✽.the user is logged in \"username\" \"password\"(file:src/test/resources/features/AccountActivityNavigation.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Checking link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_user_clicks_on_Checking_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Account drop down should have Checking selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.account_drop_down_should_have_Checking_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Credit Card account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.step({
  "name": "the user is logged in \"username\" \"password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#signin_button\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alihans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:443:22e2:7346:6d1d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/_2/2_fzmn013pz...}, goog:chromeOptions: {debuggerAddress: localhost:50366}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88c6b3abf01778ff951f277eb765af29\n*** Element info: {Using\u003did, value\u003dsignin_button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.zerobank.pages.LoginPage.login(LoginPage.java:31)\n\tat com.zerobank.step_definitions.AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(AccountActivityNavigationPageStepDefinitions.java:15)\n\tat ✽.the user is logged in \"username\" \"password\"(file:src/test/resources/features/AccountActivityNavigation.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Credit card link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_user_clicks_on_Credit_card_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Account drop down should have Credit Card selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.account_drop_down_should_have_Credit_Card_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Loan account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.step({
  "name": "the user is logged in \"username\" \"password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#signin_button\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alihans-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:443:22e2:7346:6d1d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/_2/2_fzmn013pz...}, goog:chromeOptions: {debuggerAddress: localhost:50366}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88c6b3abf01778ff951f277eb765af29\n*** Element info: {Using\u003did, value\u003dsignin_button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.zerobank.pages.LoginPage.login(LoginPage.java:31)\n\tat com.zerobank.step_definitions.AccountActivityNavigationPageStepDefinitions.the_User_Is_Logged_In(AccountActivityNavigationPageStepDefinitions.java:15)\n\tat ✽.the user is logged in \"username\" \"password\"(file:src/test/resources/features/AccountActivityNavigation.feature:30)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Loan link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_user_clicks_on_Loan_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Account drop down should have Loan selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigationPageStepDefinitions.account_drop_down_should_have_Loan_selected()"
});
formatter.result({
  "status": "skipped"
});
});