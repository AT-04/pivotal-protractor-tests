'use strict';

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
        this.analitycsTabButton = $('a[data-aid="navTab-analytics"]');
        this.settingsTabButton = $('a[data-aid="navTab-more"]');
        this.membersTabButton = $('a[data-aid="navTab-members"]');
        this.expandButton = $('a[data-aid="expandButton"]');
    }

    /**
     * Returns the Displayed Project Name.
     * @returns {string} With the Project Name.
     */
    getProjectName() {
        return this.projectName.getText();
    }

    /**
     * Click the Stories Tab Button.
     */
    clickStoriesTabButton() {
        return this.storiesTabButton.click();
    }

    /**
     * Click the Analitycs Tab Button.
     */
    clickAnalitycsTabButton() {
        return this.analitycsTabButton.click();
    }

    /**
     * Click the Settings Tab Button.
     */
    clickSettingsTabButton() {
        return this.settingsTabButton.click();
    }

    /**
     * Click the Members Tab Button.
     */
    clickMembersTabButton() {
        return this.membersTabButton.click();
    }
}

module.exports = new Project();
