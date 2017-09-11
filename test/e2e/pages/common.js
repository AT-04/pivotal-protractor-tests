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
    setInputField(webElement, inputString) {
        return webElement.clear()
            .then(() => webElement.sendKeys(inputString));
    }

    /**
     * Goes to the Dashboard page.
     */
    goesToDashboard() {
        return element(by.css('.tc_header_item.tc_header_logo')).click();
    }
}

module.exports = new Common();
