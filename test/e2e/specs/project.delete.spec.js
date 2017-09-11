'use strict';

describe('Delete a Project', function () {
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

    it('Delete the project', function* () {
        yield common.goesToDashboard();
        yield dashboardPage.clickProjectSettings('demoProject');
        yield projectSetting.clickDeleteLabel();
        yield projectSetting.clickConfirmDeleteButton();
    });

    it('Delete the project since project page', function* () {
        yield common.goesToDashboard();
        yield dashboardPage.clickProjectName('demoProject');
        yield project.clickSettingsTabButton();
        yield projectSetting.clickDeleteLabel();
        yield projectSetting.clickConfirmDeleteButton();
    });
});
