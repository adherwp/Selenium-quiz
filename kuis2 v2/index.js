const { Builder, By, Key, util } = require("selenium-webdriver");

async function opensource() {
  
  let driver = await new Builder().forBrowser("chrome").build();
  
  await driver.get("https://demo.1crmcloud.com/login.php");
  
  await driver.findElement(By.id("login_user")).sendKeys("admin");
  await driver.findElement(By.id("login_pass")).sendKeys("admin",Key.RETURN);
  
  await driver.get("https://demo.1crmcloud.com/index.php");
  await driver.findElement(By.className("meta-profile")).click();

  var assert = require('assert');

  let tes = await driver.findElement(By.id("_form_header")).findElement(By.tagName("h3")).getText();
  await assert.equal(tes, "Administrator", "gagal bos");
}

opensource();
