'use strict';

const config = require('../../../environment.json');

const requestManager = require('../../core/rest/request.manager');
const navigator = require('../../pages/navigator');

describe('Create Project', () => {

    let dashboard;

    beforeEach(async () => {
        await navigator.loginAs(config.username, config.password);
        dashboard = await navigator.goesToDashboard();
    });

    it('Create a project', async () => {
        let projectName = 'NewDemoProject';
        let projectForm = await dashboard.clickProjectButton();
        await projectForm.setNameInputField(projectName);
        await projectForm.setTxtSelectorAccountSpecific('account1');
        let project = await projectForm.clickCreateProjectButton();
        expect(await project.getProjectName()).toBe(projectName);
    });

    afterEach(async () => {
        let response = await requestManager.get('/projects');
        let id = response.data[0].id;
        response = await requestManager.del(`/projects/${id}`);
        expect(response.status).toBe(204);
    });
});
