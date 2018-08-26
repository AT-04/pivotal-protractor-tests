'use strict';

const loginPage = require('../pages/login.po');
const dashboardPage = require('../pages/dashboard.po');
const requestManager = require('../../api/request.manager');
const projectSetting = require('../pages/projects/setting.po');
const navigator = require('../pages/navigator');

describe('Delete Projects', () => {
    let id;
    beforeAll(async () => {
        await loginPage.loginAs(browser.params.username, browser.params.password);
    });

    beforeEach(async () => {
        await requestManager.post('/projects', {'name': 'demoProject'});
        id = requestManager.getResponse().id;
        expect(await requestManager.getStatus()).toBe(200);
        await navigator.goesToDashboard();
    });

    it('Delete the project', async () => {
        await dashboardPage.clickProjectSettings('demoProject');
        await projectSetting.clickDeleteLabel();
        await projectSetting.clickConfirmDeleteButton();
        expect(dashboardPage.getNoticeMessage()).toContain(' was successfully deleted.');
    });
});
