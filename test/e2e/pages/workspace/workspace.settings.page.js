'use strict';

class Workspace {

    constructor() {

        this.workSpacesNameEdit = element(by.id('workspace_name'));
        this.saveWorkspaceEditedbutton = element(by.className('save_bar__submit'));
    }

    editNameWorkspace(nameEdited) {
        return this.workSpacesNameEdit.clear()
            .then(() => this.workSpacesNameEdit.sendKeys(nameEdited));
    }

    clickSaveButtonWorkspaceEdited() {
        return this.saveWorkspaceEditedbutton.click();
    }


}

module.exports = new Workspace();