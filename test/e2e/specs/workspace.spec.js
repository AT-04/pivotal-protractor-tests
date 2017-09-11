'use strict';
describe('Create, edit and delte a Workspace', function () {
    const loginPage = require('../pages/login.page');
    const dashboardPage = require('../pages/dashboard.page');
    const workspaceForm = require('../pages/workspace/form.page.js');
    const workspace = require('../pages/workspace/workspaces.page.js');
    const workspaceSetting = require('../pages/workspace/setting.page.js');
    var name = 'New Workspace';

    beforeAll(() => {
    });

    it('Login with valid credentials', function* () {
        yield loginPage.loginAs(browser.params.username, browser.params.password);
        expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
    });

    it('Create a new workspace', function* () {
        yield dashboardPage.clickLogoLabel();
        yield dashboardPage.clickNewWorkspace();
        yield workspaceForm.setNameWorkspace(name);
        yield workspaceForm.clickSaveWorkspace();
        yield browser.wait(EC.presenceOf(workspace.workSpacesName), 12000);
        expect(workspace.getWorkspaceTitle()).toBe(name);
    });
    it('Edit Workspace', function* () {
        yield workspace.clickSettingsNavTab();
        name = 'Other name for WorkSpace';
        yield workspaceSetting.setWorkSpaceNameInputField(name);
        yield workspaceSetting.clickSaveButtonWorkspaceEdited();
        yield browser.wait(EC.presenceOf(workspaceSetting.changesSuccessLabel), 8000);
        expect(workspaceSetting.getChangesSuccessText()).toContain('Changes saved');
    });

    it('Delete workspace', function* () {
        yield workspaceSetting.clickDeleteLabel();
        yield workspaceSetting.clickConfirmDeleteButton();
        expect(workspace.getNoticeMessage()).toBe(name.concat(' was successfully deleted.'));
    });

});