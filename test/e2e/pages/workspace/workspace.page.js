'use strict';

class Workspace {

    constructor() {
        this.workSpacesName = element(by.className('raw_context_name'));
        this.settingWorkspace = $('a[data-aid=\'navTab-settings\']');
    }

    getPageTitle() {
        return browser.getTitle();
    }

    getWorkspaceTitle(){
        return this.workSpacesName.getText();
    }

    clickSettingsNavTab() {
        return this.settingWorkspace.click();
    }


}

module.exports = new Workspace();
