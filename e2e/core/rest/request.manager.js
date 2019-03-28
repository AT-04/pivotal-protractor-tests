'use strict';

const axios = require('axios');
const config = require('../../../environment.json');

axios.defaults.baseURL = config.apiBaseUrl;
axios.defaults.headers.common['X-TrackerToken'] = config.token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.responseType = 'json';

/**
 * Request manager class with Axios for API calls.
 */
class RequestManager {

    /**
     * Perform a GET request to the endpoint (path) provided.
     * @param endpoint String for the endpoint.
     * @returns {Promise<void>}
     */
    static async get(endpoint) {
        return await axios({
            method: 'GET',
            url: endpoint
        });
    }

    /**
     * Perform a POST request to the endpoint (path) with the payload data (body).
     * @param endpoint String for the endpoint.
     * @param payload Json for the body data.
     * @returns {Promise<void>}
     */
    static async post(endpoint, payload) {
        return await axios({
            method: 'POST',
            url: endpoint,
            data: payload
        });
    }

    /**
     * Perform a PUT request to the endpoint (path) provided with the payload (body).
     * @param endpoint String for the endpoint.
     * @param payload Json for the body data.
     * @returns {Promise<void>}
     */
    static async put(endpoint, payload) {
        return await axios({
            method: 'PUT',
            url: endpoint,
            data: payload
        });
    }

    /**
     * Perform a DELETE request to the endpoint (path) provided.
     * @param endpoint String for the endpoint.
     * @returns {Promise<void>}
     */
    static async del(endpoint) {
        return await axios({
            method: 'DELETE',
            url: endpoint
        });
    }
}

module.exports = RequestManager;
