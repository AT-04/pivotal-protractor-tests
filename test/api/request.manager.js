'use strict';

const axios = require('axios');
axios.defaults.baseURL = browser.params.apiBaseUrl;
axios.defaults.responseType = 'json';
axios.defaults.headers.common['X-TrackerToken'] = browser.params.token;

/**
 * Request manager class with Axios for API calls.
 */
class RequestManager {

    /**
     * Return the response of the API Request calls.
     */
    static getResponse() {
        return this.response.data;
    }

    /**
     * Return the status of the API Request calls.
     */
    static getStatus() {
        return this.status;
    }

    /**
     * Set the Response and Status after Success API calls.
     * @param response Response.
     */
    static success(response) {
        this.response = response;
        this.status = response.status;
    }

    /**
     * Set the Error and Status after Error API calls.
     * @param error Error.
     */
    static error(error) {
        this.error = error;
        this.status = error.status;
    }

    /**
     * Perform a GET request to the endpoint (path) provided.
     * @param path String for the endpoint.
     * @returns {Q.Promise<void>}
     */
    static get(path) {
        return axios.request({
            method: 'GET',
            url: path
        })
            .then(response => this.success(response))
            .catch(error => this.error(error));
    }

    /**
     * Perform a POST request to the endpoint (path) with the payload data (body).
     * @param path String for the endpoint.
     * @param payload Json for the body data.
     * @returns {Q.Promise<void>}
     */
    static post(path, payload) {
        return axios.request({
            method: 'POST',
            url: path,
            data: payload
        })
            .then(response => this.success(response))
            .catch(error => this.error(error));
    }

    /**
     * Perform a PUT request to the endpoint (path) provided with the payload (body).
     * @param path String for the endpoint.
     * @param payload Json for the body data.
     * @returns {Q.Promise<void>}
     */
    static put(path, payload) {
        return axios.request({
            method: 'PUT',
            url: path,
            data: payload
        })
            .then(response => this.success(response))
            .catch(error => this.error(error));
    }

    /**
     * Perform a DELETE request to the endpoint (path) provided.
     * @param path String for the endpoint.
     * @returns {Q.Promise<void>}
     */
    static del(path) {
        return axios.request({
            method: 'DELETE',
            url: path
        })
            .then(response => this.success(response))
            .catch(error => this.error(error));
    }
}

module.exports = RequestManager;
