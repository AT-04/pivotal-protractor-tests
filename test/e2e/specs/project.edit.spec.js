'use strict';

const requestManager = require('../../api/request.manager');
const navigator = require('../pages/navigator');
const SignIn = require('../pages/sigin.po');
const Dashboard = require('../pages/dashboard.po');
const ProjectSetting = require('../pages/projects/setting.po');

describe('Edit Projects', () => {

    let id;
    const signIn = new SignIn();
    const dashboard = new Dashboard();
    const projectSetting = new ProjectSetting();

    beforeAll(async () => {
        await signIn.loginAs(browser.params.username, browser.params.password);
    });

    beforeEach(async () => {
        await requestManager.post('/projects', {'name': 'demoProject'});
        id = requestManager.getResponse().id;
        expect(await requestManager.getStatus()).toBe(200);
        await navigator.goesToDashboard();
    });

    it('Edit the project', async () => {
        await dashboard.clickProjectSettings('demoProject');
        await projectSetting.setProjectNameInputField('demoProjectUpdated');
        await projectSetting.clickSaveButton();
        expect(await projectSetting.getChangesSuccessText()).toContain('Changes saved.');
    });

    afterEach(async () => {
        await requestManager.del(`/projects/${id}`);
        expect(await requestManager.getStatus()).toBe(204);
    });
});
