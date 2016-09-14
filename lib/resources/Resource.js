'use strict';

const Promise = require('bluebird');
const Request = require('request');
const _ = require('lodash');

const GhostAnalyticsClientError = require('../Error');

class Resource {
  
  constructor (options = {}) {
    
    if (!options.publicKey) {
      throw new GhostAnalyticsClientError({
        message: 'Missing required parameter "publicKey".',
        type: `GhostAnalyticsClient${this._resourceName}ResourceError`
      });
    }
    if (!options.secretKey) {
      throw new GhostAnalyticsClientError({
        message: 'Missing required parameter "secretKey".',
        type: `GhostAnalyticsClient${this._resourceName}ResourceError`
      });
    }
    
    this._publicKey = options.publicKey;
    this._secretKey = options.secretKey;
  }
  
  makeRequest (requestConfig) {
    return new Promise((resolve, reject) => {
      Request({
        baseUrl: 'http://analytics-development.ghostcreative.io/api/v1', // @TODO: move to analytics and add ssl
        body: requestConfig.data,
        headers: this._buildHeaders(requestConfig),
        json: true,
        method: requestConfig.method,
        qs: requestConfig.query,
        timeout: 30000,
        url: this._buildUrl(requestConfig)
      }, (err, res, body) => {
        if (err) {
          reject(new GhostAnalyticsClientError({
            message: err.message,
            type: `GhostAnalyticsClient${this._resourceName}ResourceError`
          }));
        } else {
          resolve(body);
        }
      });
    });
  }
  
  _buildHeaders (requestConfig) {
    return {
      'Authorization': `Basic ${this._encodeApiKey()}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'GhostAnalytics/v1'
    }
  }
  
  _encodeApiKey () {
    return new Buffer(`${this._publicKey}:${this._secretKey}`).toString('base64')
  }
  
  _buildUrl (requestConfig) {
    let url = requestConfig.url;
    _.mapKeys(requestConfig.params, (value, key) => {
      url = url.replace(`{${key}}`, value)
    });
    return url;
  }
}

module.exports = Resource;