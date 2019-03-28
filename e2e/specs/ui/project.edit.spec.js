'use strict';

const config = require('../../../environment.json');

const requestManager = require('../../core/rest/request.manager');
const navigator = require('../../pages/navigator');

describe('Edit Projects', () => {

    let id;
    let dashboard;

    beforeAll(async () => {
        await navigator.loginAs(config.username, config.password);
    });

    beforeEach(async () => {
        let response = await requestManager.post('/projects', {'name': 'demoProject'});
        id = response.data.id;
        expect(response.status).toBe(200);
        dashboard = await navigator.goesToDashboard();
    });

    it('Edit the project', async () => {
        let projectSetting = await dashboard.clickProjectSettings('demoProject');
        await projectSetting.setProjectNameInputField('demoProjectUpdated');
        await projectSetting.clickSaveButton();
        expect(await projectSetting.getChangesSuccessText()).toContain('Changes saved.');
    });

    afterEach(async () => {
        let response = await requestManager.del(`/projects/${id}`);
        expect(response.status).toBe(204);
    });
});
