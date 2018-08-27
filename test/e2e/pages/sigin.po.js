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
     * @returns {Q.Promise<any>}
     */
    setName(name) {
        return Common.setValue(this.nameInput, name)
            .then(() => Common.click(this.loginButton));
    }

    /**
     * Set the password Input Field.
     * @param pass Value Provided.
     * @returns {Q.Promise<any>}
     */
    setPassword(pass) {
        return Common.setValue(this.passwordInput, pass)
            .then(() => Common.click(this.loginButton));
    }

    /**
     * Perform login if user is not logged.
     * @param user Value for Username.
     * @param pass Value for Password.
     * @returns {Q.Promise<any> | promise.Promise<any> | PromiseLike<T | never> | promise.Promise<T | never> | Q.IPromise<any>}
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

module.exports = SignIn;
