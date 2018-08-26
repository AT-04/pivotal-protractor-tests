'use strict';

const loginPage = require('../pages/login.po');
const dashboardPage = require('../pages/dashboard.po');
const requestManager = require('../../api/request.manager');
const projectSetting = require('../pages/projects/setting.po');
const navigator = require('../pages/navigator');

describe('Edit Projects', () => {
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

    it('Edit the project', async () => {
        await dashboardPage.clickProjectSettings('demoProject');
        await projectSetting.setProjectNameInputField('demoProjectUpdated');
        await projectSetting.clickSaveButton();
        expect(await projectSetting.getChangesSuccessText()).toContain('Changes saved.');
    });

    afterEach(async () => {
        await requestManager.del(`/projects/${id}`);
        expect(await requestManager.getStatus()).toBe(204);
    });
});
