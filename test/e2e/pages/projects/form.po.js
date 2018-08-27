'use strict';

const Common = require('../common');
const Project = require('./project.po');

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
     * @returns {Promise<void>}
     */
    async setNameInputField(projectName) {
        await Common.setValue(this.projectNameInputField, projectName);
    }

    /**
     * Click the Account Select Field.
     * @returns {Promise<void>}
     */
    async clickAccountSelector() {
        await Common.click(this.accountSelect);
    }

    /**
     * Set the Account Name Field with the value provided.
     * @param accountName String with Account value.
     * @returns {Promise<void>}
     */
    async setNewAccountNameInputField(accountName) {
        await Common.setValue(this.newAccountNameInputField, accountName);
    }

    /**
     * Click the Create Project Button.
     * @returns {Promise<void>}
     */
    async clickCreateProjectButton() {
        await Common.click(this.createProjectButton);
        return new Project();
    }

    /**
     * Click the Private Radio Button.
     * @returns {Promise<void>}
     */
    async clickPrivateRadioButton() {
        await Common.click(this.privateRadioButton);
    }

    /**
     * Click the create new account Select Option.
     * @returns {Promise<void>}
     */
    async clickCreateNewAccountSelectOption() {
        await Common.click(this.createNewAccountSelectOption);
    }

    /**
     * Click on Create New Account Select Option and set the value.
     * @returns {Promise<void>}
     */
    async setTxtSelectorAccountSpecific(accountName) {
        await this.clickAccountSelector();
        await this.clickCreateNewAccountSelectOption();
        await this.setNewAccountNameInputField(accountName);
    }
}

module.exports = ProjectForm;
