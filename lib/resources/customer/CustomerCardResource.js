'use strict';

const Resource = require('../Resource');

class CustomerCardResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'CustomerCard';
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
      url: '/customers/{customerId}/cards/{cardId}'
    })
  }
}

module.exports = CustomerCardResource;