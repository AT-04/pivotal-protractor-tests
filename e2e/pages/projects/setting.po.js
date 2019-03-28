'use strict';

const Common = require('../../core/ui/common');

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
    }

    /**
     * Set the Project Name Input Field with the value provided.
     * @param projectName Project Name Value.
     * @returns {Promise<void>}
     */
    async setProjectNameInputField(projectName) {
        await Common.setValue(this.projectNameInputField, projectName);
    }

    /**
     * Click the Delete Label Button.
     * @returns {Promise<void>}
     */
    async clickDeleteLabel() {
        await browser.executeScript('document.getElementById("delete_link").scrollIntoView();');
        await Common.click(this.deleteLabel);
    }

    /**
     * Click the Confirm Delete Button.
     * @returns {Promise<void>}
     */
    async clickConfirmDeleteButton() {
        await Common.click(this.confirmDeleteButton);
    }

    /**
     * Click the Save Button.
     * @returns {Promise<void>}
     */
    async clickSaveButton() {
        await Common.click(this.saveButton);
        await browser.switchTo().alert().accept();
    }

    /**
     * Get the Message Changes Success label.
     * @returns {Promise<*>}
     */
    async getChangesSuccessText() {
        return this.changesSuccessLabel.getText();
    }
}

module.exports = ProjectSetting;
