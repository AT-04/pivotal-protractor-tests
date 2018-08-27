'use strict';

const axios = require('axios');

/**
 * Request manager class with Axios for API calls.
 */
class RequestManager {

    /**
     * Default Constructor.
     */
    constructor() {
        this.service = axios.create({
            baseURL: browser.params.apiBaseUrl,
            headers: {
                'X-TrackerToken': browser.params.token
            }
        });
    }

    /**
     * Return the response of the API Request calls.
     */
    getResponse() {
        return this.response.data;
    }

    /**
     * Return the status of the API Request calls.
     */
    getStatus() {
        return this.status;
    }

    /**
     * Set the Response and Status after Success API calls.
     * @param response Response.
     */
    success(response) {
        this.response = response;
        this.status = response.status;
    }

    /**
     * Set the Error and Status after Error API calls.
     * @param error Error.
     */
    error(error) {
        this.error = error;
        this.status = error.status;
    }

    /**
     * Perform a POST request to the endpoint (path) with the payload data (body).
     * @param path String for the endpoint.
     * @param payload Json for the body data.
     * @returns {Promise.<TResult>} Returning Promise.
     */
    post(path, payload) {
        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        }).then(response => this.success(response))
            .catch(error => this.error(error));
    }

    /**
     * Perform a GET request to the endpoint (path) provided.
     * @param path String for the endpoint.
     * @returns {Promise.<TResult>} Returning Promise.
     */
    get(path) {
        return this.service.request({
            method: 'GET',
            url: path,
            responseType: 'json'
        }).then(response => this.success(response))
            .catch(error => this.error(error));
    }

    /**
     * Perform a PUT request to the endpoint (path) provided with the payload (body).
     * @param path String for the endpoint.
     * @param payload Json for the body data.
     * @returns {Promise.<TResult>} Returning Promise.
     */
    put(path, payload) {
        return this.service.request({
            method: 'PUT',
            url: path,
            responseType: 'json',
            data: payload
        }).then(response => this.success(response))
            .catch(error => this.error(error));
    }

    /**
     * Perform a DELETE request to the endpoint (path) provided.
     * @param path String for the endpoint.
     * @returns {Promise.<TResult>} Returning Promise.
     */
    del(path) {
        return this.service.request({
            method: 'DELETE',
            url: path,
            responseType: 'json'
        }).then(response => this.success(response))
            .catch(error => this.error(error));
    }
}

module.exports = new RequestManager();
