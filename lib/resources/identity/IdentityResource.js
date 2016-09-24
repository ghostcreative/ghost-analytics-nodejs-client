'use strict';

const Resource = require('../Resource');

class IdentityResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'Identity';
  }
  
  /**
   * @param {object} data
   * @param {string} data.identityId
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: { identityId: data.identityId },
      url: '/identities/{identityId}'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.name
   * @param {string} data.referenceId
   * @param {string} data.referenceDescription
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      data: data,
      url: '/identities'
    })
  }
  
}

module.exports = IdentityResource;