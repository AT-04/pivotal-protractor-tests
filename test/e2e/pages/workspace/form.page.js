'use strict';

class WorkspaceForm {
	constructor() {
		this.workSpaceNameInputField = element(by.className('tc-form__input'));
		this.createWorkSpaceBtn = element(by.xpath('//button[@data-aid="FormModal__submit"]'));
	}

	getPageTitle() {
		return browser.getTitle();
	}

	setNameWorkspace(name) {
		return browser.wait(() => EC.presenceOf(this.workSpaceNameInputField), 6000)
			.then(() => this.workSpaceNameInputField.clear())
			.then(() => this.workSpaceNameInputField.sendKeys(name));
	}

	clickSaveWorkspace() {
		return this.createWorkSpaceBtn.click();
	}
}

module.exports = new WorkspaceForm();
