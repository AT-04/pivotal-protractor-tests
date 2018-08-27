'use strict';

const Common = require('../common');

/**
 * Page Object for Project Forms.
 */
class ProjectForm {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.projectNameInputField = element(by.className('tc-form__input'));
        this.accountSelect = element(by.className('tc-account-selector__header'));
        this.createNewAccountSelectOption = element(by.className('tc-account-selector__create-account-text'));
        this.newAccountNameInputField = element(by.className('tc-account-creator__name'));
        this.publicRadioButton = $('input[data-aid="public"]');
        this.privateRadioButton = $('input[data-aid="private"]');
        this.createProjectButton = $('button[data-aid="FormModal__submit"]');
    }

    /**
     * Set the Name Input Field with the string provided.
     * @param projectName String with Project Name.
     * @returns {Q.Promise<any>}
     */
    setNameInputField(projectName) {
        return Common.setValue(this.projectNameInputField, projectName);
    }

    /**
     * Click the Account Select Field.
     * @returns {Q.Promise<any>}
     */
    clickAccountSelector() {
        return Common.click(this.accountSelect);
    }

    /**
     * Set the Account Name Field with the value provided.
     * @param accountName String with Account value.
     * @returns {Q.Promise<any>}
     */
    setNewAccountNameInputField(accountName) {
        return Common.setValue(this.newAccountNameInputField, accountName);
    }

    /**
     * Click the Create Project Button.
     * @returns {Q.Promise<any>}
     */
    clickCreateProjectButton() {
        return Common.click(this.createProjectButton);
    }

    /**
     * Click the Private Radio Button.
     * @returns {Q.Promise<any>}
     */
    clickPrivateRadioButton() {
        return Common.click(this.privateRadioButton);
    }

    /**
     * Click the create new account Select Option.
     * @returns {Q.Promise<any>}
     */
    clickCreateNewAccountSelectOption() {
        return Common.click(this.createNewAccountSelectOption);
    }

    /**
     * Click on Create New Account Select Option and set the value.
     * @param accountName String with Account value.
     * @returns {Q.Promise<any>}
     */
    setTxtSelectorAccountSpecific(accountName) {
        return this.clickAccountSelector()
            .then(() => this.clickCreateNewAccountSelectOption())
            .then(() => this.setNewAccountNameInputField(accountName));
    }
}

module.exports = ProjectForm;
