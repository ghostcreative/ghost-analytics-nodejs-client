'use strict';

const Promise = require('bluebird');
const Request = require('request-promise');
const _ = require('lodash');

const GhostAnalyticsClientError = require('../GhostAnalyticsClientError');

class Resource {
  
  constructor (options = {}) {
    
    if (!options.publicKey) {
      throw new GhostAnalyticsClientError({
        name: `GhostAnalyticsClient${this._resourceName}ResourceError`,
        message: 'Missing required parameter "publicKey".'
      });
    }
    if (!options.secretKey) {
      throw new GhostAnalyticsClientError({
        name: `GhostAnalyticsClient${this._resourceName}ResourceError`,
        message: 'Missing required parameter "secretKey".'
      });
    }
    
    this._publicKey = options.publicKey;
    this._secretKey = options.secretKey;
  }
  
  makeRequest (requestConfig) {
    return Request({
      baseUrl: 'https://analytics.ghostcreative.io/api/v1',
      body: requestConfig.data || {},
      headers: this._buildHeaders(requestConfig),
      method: requestConfig.method,
      qs: requestConfig.query || {},
      timeout: 30000,
      uri: this._buildUrl(requestConfig),
      json: true
    })
    .catch(err => {
      throw new GhostAnalyticsClientError({
        message: err.error.message,
        type: `GhostAnalyticsClientRequest${this._resourceName}ResourceError`
      });
    })
  }

  _buildHeaders(requestConfig) {
    return {
      'Authorization': `Basic ${this._encodeApiKey()}`,
      "User-Agent": 'GhostAnalytics/v1'
    }
  }
  
  _encodeApiKey() {
    return new Buffer(`${this._publicKey}:${this._secretKey}`).toString('base64')
  }
  
  _buildUrl(requestConfig) {
    let url = requestConfig.url;
    _.mapKeys(requestConfig.params, (value, key) => {
      url = url.replace(`{${key}}`, value)
    });
    return url;
  }
}

module.exports = Resource;