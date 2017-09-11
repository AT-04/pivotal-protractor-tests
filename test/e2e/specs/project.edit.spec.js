'use strict';

describe('Edit the Projects', function () {
    const loginPage = require('../pages/login.page');
    const dashboardPage = require('../pages/dashboard.page');
    const requestManager = require('../../api/request.manager');
    const project = require('../pages/projects/projects.page');
    const projectSetting = require('../pages/projects/setting.page');
    const common = require('../pages/common');
    let id;

    beforeAll(function* () {
        yield loginPage.loginAs(browser.params.username, browser.params.password);
        expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
    });

    beforeEach(function* () {
        yield requestManager.post('/projects', {'name': 'demoProject'});
        id = requestManager.getResponse().id;
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Edit the project', function* () {
        yield common.goesToDashboard();
        yield dashboardPage.clickProjectSettings('demoProject');
        yield projectSetting.setProjectNameInputField('demoProjectUpdated');
        yield projectSetting.clickSaveButton();
        expect(projectSetting.getChangesSuccessText()).toContain('Changes saved.');
    });

    it('Edit the project since project page', function* () {
        yield common.goesToDashboard();
        yield dashboardPage.clickProjectName('demoProject');
        yield project.clickSettingsTabButton();
        yield projectSetting.setProjectNameInputField('demoProjectUpdated');
        yield projectSetting.clickSaveButton();
        expect(projectSetting.getChangesSuccessText()).toContain('Changes saved.');
    });

    afterEach(function* () {
        yield requestManager.del(`/projects/${id}`);
        expect(requestManager.getStatus()).toBe(204);
    });
});
