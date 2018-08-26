'use strict';

const Common = require('./common');

/**
 * Page Object for Sign In Page.
 */
class pivotalSignInPage {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.nameInput = element(by.id('credentials_username'));
        this.passwordInput = element(by.id('credentials_password'));
        this.loginButton = $('.app_signin_action_button');
    }

    /**
     * Set the username Input Field.
     * @param name Value Provided.
     * @returns {Promise.<TResult>} Promise.
     */
    setName(name) {
        return Common.setInputField(this.nameInput, name)
            .then(() => this.loginButton.click());
    }

    /**
     * Set the password Input Field.
     * @param pass Value Provided.
     * @returns {Promise.<TResult>} Promise.
     */
    setPassword(pass) {
        return Common.setInputField(this.passwordInput, pass)
            .then(() => this.loginButton.click());
    }

    /**
     * Perform login if user is not logged.
     * @param user Value for Username.
     * @param pass Value for Password.
     * @returns {Promise.<TResult>} Promise.
     */
    loginAs(user, pass) {
        browser.get(`${browser.params.baseUrl}/signin`);
        return browser.getTitle()
            .then(title => {
                if (title === 'Pivotal Tracker - Sign in') {
                    return this.setName(user)
                        .then(() => this.setPassword(pass));
                }
            });
    }
}

module.exports = new pivotalSignInPage();
