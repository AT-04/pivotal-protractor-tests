'use strict';

const loginPage = require('../pages/login.po');
const dashboardPage = require('../pages/dashboard.po');
const requestManager = require('../../api/request.manager');
const project = require('../pages/projects/projects.po');
const projectForm = require('../pages/projects/form.po');
const navigator = require('../pages/navigator');

describe('Create Project', () => {
    beforeEach(async () => {
        await loginPage.loginAs(browser.params.username, browser.params.password);
        await navigator.goesToDashboard();
    });

    it('Create a project', async () => {
        let projectName = 'NewDemoProject';
        await dashboardPage.clickProjectButton();
        await projectForm.setNameInputField(projectName);
        await projectForm.setTxtSelectorAccountSpecific('account1');
        await projectForm.clickCreateProjectButton();
        expect(await project.getProjectName()).toBe(projectName);
    });

    afterEach(async () => {
        await requestManager.get('/projects');
        let id = requestManager.getResponse()[0].id;
        await requestManager.del(`/projects/${id}`);
        expect(await requestManager.getStatus()).toBe(204);
    });
});
