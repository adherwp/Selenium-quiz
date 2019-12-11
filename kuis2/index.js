const { Builder, By, Key, util } = require("selenium-webdriver");

async function opensource() {
  
  let driver = await new Builder().forBrowser("chrome").build();
  
  await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
  
  await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
  await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms",Key.RETURN);

  var assert = require('assert');

  let tes = await driver.findElement(By.xpath("//li")).getText();
  await assert.equal(tes, "Welcome Admin", "gagal bos");
}

opensource();
