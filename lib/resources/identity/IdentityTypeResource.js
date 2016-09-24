'use strict';

const Resource = require('../Resource');

class IdentityTypeResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'IdentityType';
  }
  
  /**
   * @param {object} data
   * @param {string} data.identityTypeId
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: { identityTypeId: data.identityTypeId },
      url: '/identity-types/{identityTypeId}'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.name
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      data: data,
      url: '/identity-types'
    })
  }
  
}

module.exports = IdentityTypeResource;