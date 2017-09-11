'use strict';

const Common = require('../common.js');

/**
 * Page Object for Project Setting.
 */
class ProjectSetting {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.deleteLabel = element(by.id('delete_link'));
        this.confirmDeleteButton = element(by.id('confirm_delete'));
        this.changesSuccessLabel = $('div[id=save_success_bar] > div');
        this.projectNameInputField = element(by.id('project_name'));
        this.saveButton = element(by.className('save_bar__submit'));
        this.errorMessage = element(by.className('error_above_or_below'));
    }

    /**
     * Set the Project Name Input Field with the value provided.
     * @param projectName Project Name Value.
     * @returns {*} Promise.
     */
    setProjectNameInputField(projectName) {
        return Common.setInputField(this.projectNameInputField, projectName);
    }

    /**
     * Click the Delete Label Button.
     * @returns {Promise.<TResult>} Promise.
     */
    clickDeleteLabel() {
        return browser.executeScript('document.getElementById("delete_link").scrollIntoView();')
            .then(() => this.deleteLabel.click());
    }

    /**
     * Click the Confirm Delete Button.
     */
    clickConfirmDeleteButton() {
        return this.confirmDeleteButton.click();
    }

    /**
     * Click the Save Button.
     */
    clickSaveButton() {
        return this.saveButton.click();
    }

    /**
     * Get the Message Changes Success label.
     * @returns {string} Message of Success.
     */
    getChangesSuccessText() {
        return this.changesSuccessLabel.getText();
    }

    /**
     * Modify the Project Name value.
     * @param name Project Name value.
     * @returns {Promise.<TResult>} Promise.
     */
    modifyProjectName(name) {
        return this.setProjectNameInputField(name)
            .then(() => this.clickSaveButton());
    }

    /**
     * Check if the Error Messages Displayed.
     * @returns {*} Boolean if visible or not.
     */
    isErrorMessageDisplayed() {
        return this.errorMessage.isVisible();
    }

    /**
     * Click on Delete Project.
     * @returns {Promise.<TResult>} Project.
     */
    deleteProject() {
        return this.clickDeleteLabel()
            .then(() => this.clickConfirmDeleteButton());
    }

}

module.exports = new ProjectSetting();
