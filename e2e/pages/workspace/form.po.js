'use strict';

const Common = require('../common');

/**
 * Page Object for WorkSpace Form.
 */
class WorkspaceForm {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.workSpaceNameInputField = element(by.className('tc-form__input'));
        this.createWorkSpaceBtn = $('button[data-aid="FormModal__submit"]');
    }

    /**
     * Set the WorkSpace Name provided.
     * @param name String Value.
     * @returns {Promise<void>}
     */
    async setNameWorkspace(name) {
        await Common.setValue(this.workSpaceNameInputField, name);
    }

    /**
     * Click the Save Button for new WorkSpace.
     * @returns {Promise<void>}
     */
    async clickSaveWorkspace() {
        await Common.click(this.createWorkSpaceBtn);
    }
}

module.exports = WorkspaceForm;
