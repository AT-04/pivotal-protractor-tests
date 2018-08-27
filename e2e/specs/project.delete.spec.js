'use strict';

const requestManager = require('../../rest/request.manager');
const navigator = require('../pages/navigator');

describe('Delete Projects', () => {

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

    it('Delete the project', async () => {
        let projectSetting = await dashboard.clickProjectSettings('demoProject');
        await projectSetting.clickDeleteLabel();
        await projectSetting.clickConfirmDeleteButton();
        expect(await dashboard.getNoticeMessage()).toContain(' was successfully deleted.');
    });
});
