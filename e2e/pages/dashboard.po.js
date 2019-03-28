'use strict';

const Common = require('../core/ui/common');
const ProjectForm = require('./projects/form.po');
const ProjectSetting = require('./projects/setting.po');

/**
 * Page Object for Dashboard.
 */
class Dashboard {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.profileButton = $('a[data-aid="ProfileDropdown__profile"]');
        this.projectButton = $('#create-project-button');
        this.createWorkspace = $('.tc_projects_menu_item.tc_projects_menu_callout.tc_create_workspace');
        this.noticeMessage = $('#notice');
    }

    /**
     * Click the Project button.
     * @returns {Promise<ProjectForm>}
     */
    async clickProjectButton() {
        await Common.click(this.projectButton);
        return new ProjectForm();
    }

    /**
     * Click the Project Setting found by specific name.
     * @param name String.
     * @returns {Promise<ProjectSetting>}
     */
    async clickProjectSettings(name) {
        this.xpath = `//a[text()='${name}']/following::a[contains(@class,'SettingsIcon')]`;
        await Common.click(element(by.xpath(this.xpath)));
        return new ProjectSetting();
    }

    /**
     * Click the Profile Button.
     * @returns {Promise<void>}
     */
    async clickProfileButton() {
        await Common.click(this.profileButton);
    }

    /**
     * Click the Project Name by name provided.
     * @param name Name value.
     * @returns {Promise<void>}
     */
    async clickProjectName(name) {
        this.xpath = `//a[text()='${name}']`;
        await Common.click(element(by.xpath(this.xpath)));
    }

    /**
     * Click the New WorkSpace button.
     * @returns {Promise<void>}
     */
    async clickNewWorkspace() {
        await Common.click(this.createWorkspace);
    }

    /**
     * Return the Notice Message.
     * @returns {Promise<*>}
     */
    async getNoticeMessage() {
        return this.noticeMessage.getText();
    }
}

module.exports = Dashboard;
