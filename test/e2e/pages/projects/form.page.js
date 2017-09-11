'use strict';

const Common = require('../common.js');

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
     * @returns {*} Promise.
     */
    setNameInputField(projectName) {
        return Common.setInputField(this.projectNameInputField, projectName);
    }

    /**
     * Click the Account Select Field.
     */
    clickAccountSelector() {
        return this.accountSelect.click();
    }

    /**
     * Set the Account Name Field with the value provided.
     * @param accountName String with Account value.
     * @returns {*} Promise.
     */
    setNewAccountNameInputField(accountName) {
        return Common.setInputField(this.newAccountNameInputField, accountName);
    }

    /**
     * Click the Create Project Button.
     */
    clickCreateProjectButton() {
        return this.createProjectButton.click();
    }

    /**
     * Click the Private Radio Button.
     */
    clickPrivateRadioButton() {
        return this.privateRadioButton.click();
    }

    /**
     * Click the create new account Select Option.
     */
    clickCreateNewAccountSelectOption() {
        return this.createNewAccountSelectOption.click();
    }

    /**
     * Click on Create New Account Select Option and set the value.
     * @param accountName String with Account value.
     * @returns {Promise.<TResult>} Promise.
     */
    createNewAccount(accountName) {
        return this.clickCreateNewAccountSelectOption()
            .then(() => this.setNewAccountNameInputField(accountName));
    }
}

module.exports = new ProjectForm();
