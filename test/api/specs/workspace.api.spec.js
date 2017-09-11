'use strict';
describe('Test all API request', function () {
    const requestManager = require('../request.manager');
    let id;
    it('Send a POST request to WorkSpaces', function* () {
        yield requestManager.post('/my/workspaces', {'name': 'MyWorkSpaces'});
        id = requestManager.getResponse().id;
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Send a GET request to WorkSpaces', function* () {
        yield requestManager.get(`/my/workspaces/${id}`);
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Send a DELETE request the WorkSpaces', function* () {
        yield requestManager.del(`/my/workspaces/${id}`);
        expect(requestManager.getStatus()).toBe(204);
    });
});
