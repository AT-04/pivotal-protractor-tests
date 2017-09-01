'use strict';

describe('Login', function () {
	const loginPage = require('../pages/login.page');
	const dashboardPage = require('../pages/dashboard.page');
	const projectForm = require('../pages/projects/form.page.js');
	const project = require('../pages/projects/projects.page.js');

	beforeAll(() => {
		browser.waitForAngularEnabled(false);
		browser.get(`${browser.params.baseUrl}/signin`);
	});

	it('Login with valid credentials', function*() {
		yield loginPage.setName(browser.params.username);
		yield loginPage.setPassword(browser.params.password);
		expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
	});

	it('Creates a new Project', function*() {
		yield dashboardPage.clickProjectButton();
		yield projectForm.setNameInputField('at-04demo');
		yield projectForm.clickAccountSelector();
		yield projectForm.createNewAccount('demo');
		yield projectForm.clickCreateProjectButton();
		yield browser.wait(EC.presenceOf(project.projectName), 8000);
		expect(project.getProjectName()).toContain('demo');
	});

	it('Goes to the Settings Project Page', function*() {
		yield project.clickSettingsTabButton();
	});
});
