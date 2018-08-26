'use strict';

/**
 * Page Object for Dashboard.
 */
class pivotalDashboardPage {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {

        this.profileButton = $('a[data-aid=\'ProfileDropdown__profile\']');
        this.projectButton = element(by.id('create-project-button'));
        this.createWorkspace = element(by.css('.tc_projects_menu_item.tc_projects_menu_callout.tc_create_workspace'));
        this.noticeMessage = element(by.id('notice'));
    }

    /**
     * Click the Project button.
     */
    clickProjectButton() {
        return this.projectButton.click();
    }

    /**
     * Click the Project Setting found by specific name.
     * @param name String.
     */
    clickProjectSettings(name) {
        this.xpath = `//a[text()='${name}']/following::a[contains(@class,'SettingsIcon')]`;
        return element(by.xpath(this.xpath)).click();
    }

    /**
     * Click the Profile Button.
     */
    clickProfileButton() {
        return this.profileButton.click();
    }

    /**
     * Click the Project Name by name provided.
     * @param name Name value.
     */
    clickProjectName(name) {
        this.xpath = `//a[text()='${name}']`;
        return element(by.xpath(this.xpath)).click();
    }

    /**
     * Click the New WorkSpace button.
     */
    clickNewWorkspace() {
        return this.createWorkspace.click();
    }

    /**
     * Return the Notice Message.
     * @returns {string} Notice Message value.
     */
    getNoticeMessage() {
        return this.noticeMessage.getText();
    }
}

module.exports = new pivotalDashboardPage();
