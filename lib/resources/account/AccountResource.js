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
      params: { accountId: data.accountId },
      url: '/accounts/{accountId}'
    })
  }
}

module.exports = AccountResource;