import { test, expect } from '@playwright/test';

test('Polestar Car Subscription details', async ({ page }) => {
  test.setTimeout(75000);

  await page.goto('https://www.polestar.com/se/developer/get-started/');

  //await page.waitForTimeout(5000);

  //Expect a title "to contain" a substring.

  await expect(page).toHaveTitle(/Polestar/);

  await page.waitForTimeout(2000);

  await page.locator("#onetrust-accept-btn-handler").click();

  await page.locator("//span[text()='Return Home']").click();

  await page.locator("//a[@href='/global/polestar-3/' and @class='css-ylk4z6']/../a[1]").click();

  await page.locator("(//span[text()='Stay up to date'])[1]").click();

  await page.waitForTimeout(3000);

  //Fill the details for car subscription
  //first name

  await page.locator("//input[@id='76950913--first-name']").fill("jaya");

  await page.waitForTimeout(300);

 //second name

  await page.locator("//input[@id='76950913-last-name']").fill("lakshmi");

   await page.waitForTimeout(300);

 //email id

  await page.locator("//input[@id='76950914']").fill("jaya34@test.com");

  await page.waitForTimeout(300);

  await page.locator("(//div[@class='css-cssveg'])[1]").click;

  await page.locator("//label[@class='css-9pq9cn']").click();

  await page.locator("//button[@id='76950918-list-1']").click();

 // await page.getByText('India').click();

  await page.waitForTimeout(5000);

  await page.locator("//input[@id='a4ca2ade-63dd-43c3-a17b-1f42b87db55c']").check();

  await page.locator("(//span[@class='css-1lfoa71'])[3]").click();

  await page.waitForTimeout(10000);

  let a =  await page.locator("(//h2[@class='css-1euduvz'])[1]").textContent();

  console.log(a);

  let b = "Car Subscription is successfull !!!"

  console.log(b);

});