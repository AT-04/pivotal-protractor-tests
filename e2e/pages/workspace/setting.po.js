'use strict';

const Common = require('../../core/ui/common');

/**
 * Page Object for WorkSpace.
 */
class WorkspaceSetting {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.workSpacesNameEdit = element(by.id('workspace_name'));
        this.saveWorkspaceEditedbutton = element(by.className('save_bar__submit'));
        this.deleteLabel = element(by.id('delete_link'));
        this.confirmDeleteButton = element(by.id('confirm_delete'));
    }

    /**
     * Click the Save Button WorkSpace for Edit.
     * @returns {Promise<void>}
     */
    async clickSaveButtonWorkspaceEdited() {
        await Common.click(this.saveWorkspaceEditedbutton);
    }

    /**
     * Click the Delete Label.
     * @returns {Promise<void>}
     */
    async clickDeleteLabel() {
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
     * Set the Name for WorkSpace Input Field with value provided.
     * @param workspaceName Name for Workspace.
     * @returns {Promise<void>}
     */
    async setWorkSpaceNameInputField(workspaceName) {
        await Common.setValue(this.workSpacesNameEdit, workspaceName);
    }
}

module.exports = WorkspaceSetting;
