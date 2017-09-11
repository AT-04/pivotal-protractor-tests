'use strict';

describe('Test all API request', function () {
    const requestManager = require('../request.manager');
    let id;

    it('Send a POST request to Projects', function* () {
        yield requestManager.post('/projects', {'name': 'demoProject1'});
        id = requestManager.getResponse().id;
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Send a PUT request to Projects', function* () {
        yield requestManager.put(`/projects/${id}`, {'name': 'demoProjectUpdated'});
        expect(requestManager.getStatus()).toBe(200);
    });

    it('Send a Delete request the Project', function* () {
        yield requestManager.del(`/projects/${id}`);
        expect(requestManager.getStatus()).toBe(204);
    });
});