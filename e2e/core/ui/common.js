'use strict';

const { ExpectedConditions } = require('protractor');

const TIMEOUT_MILLISECONDS = 30000;

/**
 * Common class with Common Methods.
 */
class Common {

    /**
     * Clean and Set the WebElement with the value provided.
     * @param webElement WebElement.
     * @param inputString String value.
     * @returns {Promise<void>}
     */
    static async setValue(webElement, inputString) {
        await browser.wait(ExpectedConditions.visibilityOf(webElement), TIMEOUT_MILLISECONDS,
            `the web element: ${webElement} is not visible`);
        await webElement.clear();
        await webElement.sendKeys(inputString);
    }

    /**
     * Click on a Web element.
     * @param {string} webElement.
     * @returns {Promise<void>}
     */
    static async click(webElement) {
        await browser.wait(ExpectedConditions.elementToBeClickable(webElement), TIMEOUT_MILLISECONDS,
            `the web element: ${webElement} is not clickable`);
        await webElement.click();
    }
}

module.exports = Common;
