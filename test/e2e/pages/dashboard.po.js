'use strict';

const Common = require('./common');

/**
 * Page Object for Dashboard.
 */
class Dashboard {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.profileButton = $('a[data-aid="ProfileDropdown__profile"]');
        this.projectButton = $('#create-project-button');
        this.createWorkspace = $('.tc_projects_menu_item.tc_projects_menu_callout.tc_create_workspace');
        this.noticeMessage = $('#notice');
    }

    /**
     * Click the Project button.
     * @returns {Q.Promise<any>}
     */
    clickProjectButton() {
        return Common.click(this.projectButton);
    }

    /**
     * Click the Project Setting found by specific name.
     * @param name String.
     * @returns {Q.Promise<any>}
     */
    clickProjectSettings(name) {
        this.xpath = `//a[text()='${name}']/following::a[contains(@class,'SettingsIcon')]`;
        return Common.click(element(by.xpath(this.xpath)));
    }

    /**
     * Click the Profile Button.
     * @returns {Q.Promise<any>}
     */
    clickProfileButton() {
        return Common.click(this.profileButton);
    }

    /**
     * Click the Project Name by name provided.
     * @param name Name value.
     * @returns {Q.Promise<any>}
     */
    clickProjectName(name) {
        this.xpath = `//a[text()='${name}']`;
        return Common.click(element(by.xpath(this.xpath)));
    }

    /**
     * Click the New WorkSpace button.
     * @returns {Q.Promise<any>}
     */
    clickNewWorkspace() {
        return Common.click(this.createWorkspace);
    }

    /**
     * Return the Notice Message.
     * @returns {string} Notice Message value.
     */
    getNoticeMessage() {
        return this.noticeMessage.getText();
    }
}

module.exports = Dashboard;
