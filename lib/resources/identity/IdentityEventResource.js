'use strict';

const Resource = require('../Resource');

class IdentityEventResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'IdentityEvent';
  }
  
  /**
   * @param {object} data
   * @param {string} data.name
   * @param {string} data.gatId
   * @param {int} data.accountId
   * @param {int} data.apiKeyId
   * @param {int} data.identityId
   * @param {[identityEventProperty]} data.identityEventProperties
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      data: data,
      url: '/identities/{identityId}/events'
    })
  }
  
}

module.exports = IdentityEventResource;