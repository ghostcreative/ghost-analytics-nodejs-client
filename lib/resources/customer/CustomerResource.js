'use strict';

const Resource = require('../Resource');

class CustomerResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'Customer';
  }
  
  /**
   * @param {object} data
   * @param {string} data.customerId
   * @param {string} data.cardId
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: data,
      url: '/customers/{customerId}'
    })
  }
}

module.exports = CustomerResource;