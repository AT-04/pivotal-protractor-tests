'use strict';

const requestManager = require('../../api/request.manager');
const navigator = require('../pages/navigator');

describe('Create Project', () => {

    let dashboard;

    beforeEach(async () => {
        await navigator.loginAs(browser.params.username, browser.params.password);
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
        await requestManager.get('/projects');
        let id = requestManager.getResponse()[0].id;
        await requestManager.del(`/projects/${id}`);
        expect(await requestManager.getStatus()).toBe(204);
    });
});
