'use strict';

const Dashboard = require('./dashboard.po');
const SignIn = require('./sigin.po');

/**
 * Navigator class.
 */
class Navigator {

    /**
     * Goes to the SignIn page.
     * @returns {Promise<SignIn>}
     */
    static async goesToSign() {
        await browser.get(`${browser.params.baseUrl}/signin`);
        return new SignIn();
    }

    /**
     * Perform login if user is not logged.
     * @param user Value for Username.
     * @param pass Value for Password.
     * @returns {Promise<void>}
     */
    static async loginAs(user, pass) {
        let signin = await this.goesToSign();
        let title = await browser.getTitle();
        if (title === 'Pivotal Tracker - Sign in') {
            await signin.setName(user);
            await signin.setPassword(pass);
        }
    }

    /**
     * Goes to the Dashboard page.
     * @returns {Promise<Dashboard>}
     */
    static async goesToDashboard() {
        await browser.get(`${browser.params.baseUrl}/dashboard`);
        return new Dashboard();
    }
}

module.exports = Navigator;
