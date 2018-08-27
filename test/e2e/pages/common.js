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
     * @returns {Q.Promise<any>}
     */
    static setValue(webElement, inputString) {
        return browser.wait(ExpectedConditions.visibilityOf(webElement), TIMEOUT_MILLISECONDS,
            `the web element: ${webElement} is not visible`)
            .then(() => webElement.clear())
            .then(() => webElement.sendKeys(inputString));
    }

    /**
     * Click on a Web element.
     * @param {string} webElement.
     * @returns {Q.Promise<any>}
     */
    static click(webElement) {
        return browser.wait(ExpectedConditions.elementToBeClickable(webElement), TIMEOUT_MILLISECONDS,
            `the web element: ${webElement} is not clickable`)
            .then(() => webElement.click());
    }

}

module.exports = Common;
