'use strict';

const Resource = require('../Resource');

class AccountResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'Account';
  }
  
  /**
   * @param {object} data
   * @param {string} data.accountId
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: data,
      url: '/accounts/{id}'
    })
  }
}

module.exports = AccountResource;