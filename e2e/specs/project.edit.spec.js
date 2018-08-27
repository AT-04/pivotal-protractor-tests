'use strict';

const requestManager = require('../../rest/request.manager');
const navigator = require('../pages/navigator');

describe('Edit Projects', () => {

    let id;
    let dashboard;

    beforeAll(async () => {
        await navigator.loginAs(browser.params.username, browser.params.password);
    });

    beforeEach(async () => {
        await requestManager.post('/projects', {'name': 'demoProject'});
        id = requestManager.getResponse().id;
        expect(await requestManager.getStatus()).toBe(200);
        dashboard = await navigator.goesToDashboard();
    });

    it('Edit the project', async () => {
        let projectSetting = await dashboard.clickProjectSettings('demoProject');
        await projectSetting.setProjectNameInputField('demoProjectUpdated');
        await projectSetting.clickSaveButton();
        expect(await projectSetting.getChangesSuccessText()).toContain('Changes saved.');
    });

    afterEach(async () => {
        await requestManager.del(`/projects/${id}`);
        expect(await requestManager.getStatus()).toBe(204);
    });
});
