'use strict';

const Common = require('../common');

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
     * Get the WorkSpace Title.
     * @returns {Promise<void>}
     */
    async getWorkspaceTitle() {
        await this.workSpacesName.getText();
    }

    /**
     * Click Settings Nav Tab.
     * @returns {Promise<void>}
     */
    async clickSettingsNavTab() {
        await Common.click(this.settingWorkspace);
    }
}

module.exports = Workspace;
