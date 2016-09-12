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
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: { customerId: data.customerId },
      url: '/customers/{customerId}'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.description
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      data: data,
      url: '/customers'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.customerId
   * @param {string} data.description
   * @return Promise
   */
  update (data) {
    return this.makeRequest({
      method: 'PUT',
      params: { customerId: data.customerId },
      data: data,
      url: '/customers/{customerId}'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.customerId
   * @return Promise
   */
  delete (data) {
    return this.makeRequest({
      method: 'DELETE',
      params: { customerId: data.customerId },
      url: '/customers/{customerId}'
    })
  }
}

module.exports = CustomerResource;