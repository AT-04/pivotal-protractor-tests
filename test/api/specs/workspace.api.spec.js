'use strict';

const requestManager = require('../request.manager');

describe('Test all API request', () => {
    let id;
    it('Send a POST request to WorkSpaces', async () => {
        await requestManager.post('/my/workspaces', {'name': 'MyWorkSpaces'});
        id = requestManager.getResponse().id;
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Send a GET request to WorkSpaces', async () => {
        await requestManager.get(`/my/workspaces/${id}`);
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Send a DELETE request the WorkSpaces', async () => {
        await requestManager.del(`/my/workspaces/${id}`);
        expect(requestManager.getStatus()).toBe(204);
    });
});
