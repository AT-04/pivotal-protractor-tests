'use strict';

const requestManager = require('../../api/request.manager');
const navigator = require('../pages/navigator');
const SignIn = require('../pages/sigin.po');
const Dashboard = require('../pages/dashboard.po');
const ProjectSetting = require('../pages/projects/setting.po');

describe('Delete Projects', () => {

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

    it('Delete the project', async () => {
        await dashboard.clickProjectSettings('demoProject');
        await projectSetting.clickDeleteLabel();
        await projectSetting.clickConfirmDeleteButton();
        expect(dashboard.getNoticeMessage()).toContain(' was successfully deleted.');
    });
});
