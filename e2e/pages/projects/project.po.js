'use strict';

const Common = require('../../core/ui/common');

/**
 * Page Object for Project.
 */
class Project {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.projectName = $('.raw_context_name');
        this.storiesTabButton = $('a[data-aid="navTab-stories"]');
        this.settingsTabButton = $('a[data-aid="navTab-more"]');
    }

    /**
     * Returns the Displayed Project Name.
     * @returns {Promise<*>}
     */
    async getProjectName() {
        return this.projectName.getText();
    }

    /**
     * Click the Stories Tab Button.
     * @returns {Promise<void>}
     */
    async clickStoriesTabButton() {
        await Common.click(this.storiesTabButton);
    }

    /**
     * Click the Settings Tab Button.
     * @returns {Promise<void>}
     */
    async clickSettingsTabButton() {
        await Common.click(this.settingsTabButton);
    }
}

module.exports = Project;
