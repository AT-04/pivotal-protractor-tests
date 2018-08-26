'use strict';

/**
 * Common class with Common Methods.
 */
class Common {

    /**
     * Clean and Set the WebElement with the value provided.
     * @param webElement WebElement.
     * @param inputString String value.
     * @returns {Promise.<TResult>} Promise.
     */
    static setInputField(webElement, inputString) {
        return webElement.clear()
            .then(() => webElement.sendKeys(inputString));
    }
}

module.exports = Common;
