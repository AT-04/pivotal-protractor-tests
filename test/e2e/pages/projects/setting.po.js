'use strict';

const Common = require('../common');

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
        this.changesSuccessLabel = $('#save_success_bar > div');
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
        return Common.setValue(this.projectNameInputField, projectName);
    }

    /**
     * Click the Delete Label Button.
     * @returns {Q.Promise<any> | promise.Promise<any> | PromiseLike<any | never> | promise.Promise<any | never> | Q.IPromise<any>}
     */
    clickDeleteLabel() {
        return browser.executeScript('document.getElementById("delete_link").scrollIntoView();')
            .then(() => Common.click(this.deleteLabel));
    }

    /**
     * Click the Confirm Delete Button.
     * @returns {Q.Promise<any>}
     */
    clickConfirmDeleteButton() {
        return Common.click(this.confirmDeleteButton);
    }

    /**
     * Click the Save Button.
     * @returns {Q.Promise<void>}
     */
    clickSaveButton() {
        return Common.click(this.saveButton)
            .then(() => browser.switchTo().alert().accept());
    }

    /**
     * Get the Message Changes Success label.
     * @returns {string} Message of Success.
     */
    getChangesSuccessText() {
        return this.changesSuccessLabel.getText();
    }
}

module.exports = ProjectSetting;
