const { Builder, By, until } = require('selenium-webdriver');

async function clickSubmitButton() {

    // Launch Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // Open website
        await driver.get('http://www.example.com/form-with-submit');

        // Wait until the Submit button with correct text is found
        let submitButton = await driver.wait(
            until.elementLocated(By.xpath("//button[normalize-space()='Submit']")),
            10000
        );

        // Wait until button is visible
        await driver.wait(until.elementIsVisible(submitButton), 10000);

        // Wait until button is enabled
        await driver.wait(until.elementIsEnabled(submitButton), 10000);

        // Click the button
        await submitButton.click();

        console.log("Submit button clicked successfully");

    } catch (error) {

        console.log("Error occurred:", error);

    } finally {

        // Close browser
        await driver.quit();
    }
}

// Run function
clickSubmitButton();