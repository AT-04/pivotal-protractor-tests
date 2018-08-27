'use strict';

const Common = require('./common');

/**
 * Page Object for Sign In Page.
 */
class SignIn {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.nameInput = $('#credentials_username');
        this.passwordInput = $('#credentials_password');
        this.loginButton = $('.app_signin_action_button');
    }

    /**
     * Set the username Input Field.
     * @param name Value Provided.
     * @returns {Promise<void>}
     */
    async setName(name) {
        await Common.setValue(this.nameInput, name);
        await Common.click(this.loginButton);
    }

    /**
     * Set the password Input Field.
     * @param pass Value Provided.
     * @returns {Promise<void>}
     */
    async setPassword(pass) {
        await Common.setValue(this.passwordInput, pass);
        await Common.click(this.loginButton);
    }
}

module.exports = SignIn;
