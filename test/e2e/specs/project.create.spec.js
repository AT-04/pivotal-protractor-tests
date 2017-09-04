'use strict';

describe('Login', function () {
	const loginPage = require('../pages/login.page');
	const dashboardPage = require('../pages/dashboard.page');
	const requestManager = require('../../api/request.manager');
	const project = require('../pages/projects/projects.page');
	const projectForm = require('../pages/projects/form.page');
	const common = require('../pages/common');
	let id;

	beforeAll(function*() {
		browser.waitForAngularEnabled(false);
		browser.get(`${browser.params.baseUrl}/signin`);
		yield loginPage.setName(browser.params.username);
		yield loginPage.setPassword(browser.params.password);
		expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
	});


	it('Create a project', function*() {
		yield common.goesToDashboard();
		yield dashboardPage.clickProjectButton();
		yield projectForm.setNameInputField('newDemoProject');
		yield projectForm.clickAccountSelector();
		yield projectForm.setNewAccountNameInputField('account1');
		yield projectForm.clickCreateProjectButton();
		expect(project.getProjectName()).toContain('newDemoProject');
	});

	afterEach(function*() {
		yield requestManager.del(`/projects/${id}`);
		expect(requestManager.getStatus()).toBe(204);
	});

	afterAll(function*() {
		yield common.clickLogOut();

	});
});