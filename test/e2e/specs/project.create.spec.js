'use strict';

const requestManager = require('../../api/request.manager');
const navigator = require('../pages/navigator');
const SignIn = require('../pages/sigin.po');
const Dashboard = require('../pages/dashboard.po');
const ProjectForm = require('../pages/projects/form.po');
const Project = require('../pages/projects/project.po');

describe('Create Project', () => {

    const signIn = new SignIn();
    const dashboard = new Dashboard();
    const projectForm = new ProjectForm();
    const project = new Project();

    beforeEach(async () => {
        await signIn.loginAs(browser.params.username, browser.params.password);
        await navigator.goesToDashboard();
    });

    it('Create a project', async () => {
        let projectName = 'NewDemoProject';
        await dashboard.clickProjectButton();
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
