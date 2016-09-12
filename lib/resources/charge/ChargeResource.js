'use strict';

const Resource = require('../Resource');

class ChargeResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'Charge';
  }
  
  /**
   * @param {object} data
   * @param {string} data.amount
   * @param {string} data.cardId
   * @param {string} data.customerId
   * @param {string} data.description
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      data: data,
      url: '/charges'
    })
  }
}

module.exports = ChargeResource;