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

        this.workSpacesNameEdit = element(by.id('workspace_name'));
        this.saveWorkspaceEditedbutton = element(by.className('save_bar__submit'));
        this.deleteLabel = element(by.id('delete_link'));
        this.confirmDeleteButton = element(by.id('confirm_delete'));
        this.changesSuccessLabel = $('div[id=save_success_bar] > div');

    }

    /**
     * Click the Save Button WorkSpace for Edit.
     */
    clickSaveButtonWorkspaceEdited() {
        return this.saveWorkspaceEditedbutton.click();
    }

    /**
     * Click the Delete Label.
     */
    clickDeleteLabel() {
        return this.deleteLabel.click();
    }

    /**
     * Click the Confirm Delete Button.
     */
    clickConfirmDeleteButton() {
        return this.confirmDeleteButton.click();
    }

    /**
     * Set the Name for WorkSpace Input Field with value provided.
     * @param workspaceName Name for Workspace.
     * @returns {*} Promise.
     */
    setWorkSpaceNameInputField(workspaceName) {
        return Common.setInputField(this.workSpacesNameEdit, workspaceName);
    }

    /**
     * Get the Message Changes Success label.
     * @returns {string} Message of Success.
     */
    getChangesSuccessText() {
        return this.changesSuccessLabel.getText();
    }
}

module.exports = new Workspace();
