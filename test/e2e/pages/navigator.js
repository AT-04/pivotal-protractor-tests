'use strict';

/**
 * Navigator class.
 */
class Navigator {

    /**
     * Goes to the Dashboard page.
     * @returns {promise.Promise<any>}
     */
    static goesToDashboard() {
        return browser.get(`${browser.params.baseUrl}/dashboard`);
    }
}

module.exports = Navigator;
