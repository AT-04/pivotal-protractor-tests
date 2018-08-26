'use strict';

const requestManager = require('../request.manager');

describe('Test all API request', () => {
    let id;
    it('Send a POST request to Projects', async () => {
        await requestManager.post('/projects', {'name': 'demoProject1'});
        id = requestManager.getResponse().id;
        expect(await requestManager.getStatus()).toBe(200);
    });

    it('Send a PUT request to Projects', async () => {
        await requestManager.put(`/projects/${id}`, {'name': 'demoProjectUpdated'});
        expect(await requestManager.getStatus()).toBe(200);
    });

    it('Send a Delete request the Project', async () => {
        await requestManager.del(`/projects/${id}`);
        expect(await requestManager.getStatus()).toBe(204);
    });
});
