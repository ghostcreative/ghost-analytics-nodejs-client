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
      params: { customerId: data.customerId, cardId: data.cardId },
      url: '/customers/{customerId}/cards/{cardId}'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.customerId
   * @param {string} data.cardId
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      params: { customerId: data.customerId },
      data: data,
      url: '/customers/{customerId}/cards'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.customerId
   * @param {string} data.cardId
   * @return Promise
   */
  delete (data) {
    return this.makeRequest({
      method: 'DELETE',
      params: { customerId: data.customerId, cardId: data.cardId },
      url: '/customers/{customerId}/cards/{cardId}'
    })
  }
}

module.exports = CustomerCardResource;