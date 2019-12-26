$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials and click Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_enters_valid_credentials_and_click_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on Account Summary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_should_land_on_Account_Summary_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#signin_button\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alihans-MacBook-Air.local\u0027, ip: \u00272600:8806:6400:12a0:5c53:da57:a19:a10b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/_2/2_fzmn013pz...}, goog:chromeOptions: {debuggerAddress: localhost:50613}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 65627b47cbc6d619d04616311d1bb847\n*** Element info: {Using\u003did, value\u003dsignin_button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.zerobank.pages.LoginPage.signin(LoginPage.java:34)\n\tat com.zerobank.step_definitions.LoginPageStepDefinitions.user_is_on_login_page(LoginPageStepDefinitions.java:15)\n\tat ✽.user is on login page(file:src/test/resources/features/Login.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid credentials and click Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_enters_invalid_credentials_and_click_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.error_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
});