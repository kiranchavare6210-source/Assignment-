const { Builder, By, until } = require('selenium-webdriver');

async function clickSubmitButton() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('http://www.example.com/form-with-submit');

        // Wait for button using text
        let submitButton = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Submit')]")),
            10000
        );

        // Wait until button is visible and clickable
        await driver.wait(until.elementIsVisible(submitButton), 10000);
        await driver.wait(until.elementIsEnabled(submitButton), 10000);

        // Click button
        await submitButton.click();

        console.log("Submit button clicked successfully");

    } catch (error) {

        console.log("Error occurred:", error);

    } finally {

        await driver.quit();
    }
}

clickSubmitButton();