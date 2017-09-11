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
        this.logoLabel = element(by.className('tc_header_text_logo'));
        this.projectButton = element(by.id('create-project-button'));
        this.createWorkspace = element(by.css('.tc_projects_menu_item.tc_projects_menu_callout.tc_create_workspace'));

    }

    /**
     * Get the Page title of WorkSpaces.
     * @returns {*} Title as String.
     */
    getPageTitle() {
        return browser.getTitle();
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
     * Click the Logo Label.
     */
    clickLogoLabel() {
        return this.logoLabel.click();
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

}

module.exports = new pivotalDashboardPage();
