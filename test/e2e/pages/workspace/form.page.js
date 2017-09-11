'use strict';

/**
 * Page Object for WorkSpace Form.
 */
class WorkspaceForm {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.workSpaceNameInputField = element(by.className('tc-form__input'));
        this.createWorkSpaceBtn = element(by.xpath('//button[@data-aid="FormModal__submit"]'));
    }

    /**
     * Get the Page title of WorkSpaces.
     * @returns {*} Title as String.
     */
    getPageTitle() {
        return browser.getTitle();
    }

    /**
     * Set the WorkSpace Name provided.
     * @param name String Value.
     * @returns {Promise.<TResult>} Promise.
     */
    setNameWorkspace(name) {
        return browser.wait(() => EC.presenceOf(this.workSpaceNameInputField), 6000)
            .then(() => this.workSpaceNameInputField.clear())
            .then(() => this.workSpaceNameInputField.sendKeys(name));
    }

    /**
     * Click the Save Button for new WorkSpace.
     */
    clickSaveWorkspace() {
        return this.createWorkSpaceBtn.click();
    }
}

module.exports = new WorkspaceForm();
