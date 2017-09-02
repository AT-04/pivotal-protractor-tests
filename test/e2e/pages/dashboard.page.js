'use strict';

class pivotalDashboardPage {

    constructor() {
        this.logoLabel = element(by.className('tc_header_text_logo'));
        this.createWorkspace = element(by.className('tc_projects_menu_item tc_projects_menu_callout tc_create_workspace'));


    }

    getPageTitle() {
        return browser.getTitle();
    }

    clickLogo() {
        return this.logoLabel.click();
    }

    clickNewWorkspace() {
        return this.createWorkspace.click();
    }

}

module.exports = new pivotalDashboardPage();
