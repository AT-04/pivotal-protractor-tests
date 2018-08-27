'use strict';

/**
 * Page Object for WorkSpace.
 */
class Workspace {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.workSpacesName = element(by.className('raw_context_name'));
        this.settingWorkspace = $('a[data-aid=\'navTab-settings\']');
    }

    /**
     * Get the Page title of WorkSpaces.
     * @returns {*} Title as String.
     */
    getPageTitle() {
        return browser.getTitle();
    }

    /**
     * Get the WorkSpace Title.
     * @returns {string} Title value.
     */
    getWorkspaceTitle() {
        return this.workSpacesName.getText();
    }

    /**
     * Click Settings Nav Tab.
     */
    clickSettingsNavTab() {
        return this.settingWorkspace.click();
    }
}

module.exports = Workspace;
