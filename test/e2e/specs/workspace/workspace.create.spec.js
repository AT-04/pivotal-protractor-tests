'use strict';
describe('Create a new Workspace', function () {
    const loginPage = require('../../pages/login.page');
    const dashboardPage = require('../../pages/dashboard.page');
    const workspaceForm = require('../../pages/workspace/workspace.form.page');
    const workspace = require('../../pages/workspace/workspace.page');

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.baseUrl + '/signin');
    });

    it('Login with valid credentials', function* () {
        yield loginPage.setName(browser.params.username);
        yield loginPage.setPassword(browser.params.password);
        expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
    });

    it('Create a new workspace', function* () {
        var name = "5";
        yield dashboardPage.clickLogo();
        yield dashboardPage.clickNewWorkspace();
        yield browser.wait(EC.presenceOf(workspaceForm.workSpaceNameInputField), 6000);
        yield workspaceForm.setNameWorkspace(name);
        yield workspaceForm.clickSaveWorkspace();
        yield browser.wait(EC.presenceOf(workspace.workSpacesName), 6000);
        expect(workspace.getWorkspaceTitle()).toBe(name);
    });

    // it('Edit workspace', function* () {
    //     var nameEdited = "MyNeWorkspaceEdit";
    //     yield workspace.clickSettingsNavTab();
    //     yield browser.wait(EC.presenceOf(workspaceSettings.workSpacesNameEdit), 6000);
    //     yield workspaceSettings.editNameWorkspace(nameEdited);
    //     yield workspaceSettings.clickSaveButtonWorkspaceEdited();
    //     yield browser.wait(EC.presenceOf(workspace.workSpacesName), 6000);
    //     expect(workspace.getWorkspaceTitle()).toBe(nameEdited);
    // })


});
