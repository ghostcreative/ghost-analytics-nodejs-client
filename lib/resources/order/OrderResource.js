'use strict';

const Resource = require('../Resource');

class OrderResource extends Resource {
  
  constructor (options = {}) {
    super(options);
    this._resourceName = 'Order';
  }
  
  /**
   * @param {object} data
   * @param {string} data.orderId
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: { orderId: data.orderId },
      url: '/orders/{orderId}'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.customerId
   * @param {string} data.referrer
   * @param {[startDate, endDate]} data.dateRange
   * @param {string} data.gatId
   * @param {string} data.limit
   * @param {string} data.offset
   * @param {string} data.sortBy
   * @param {string} data.sortDir
   * @return Promise
   */
  fetch (data) {
    return this.makeRequest({
      method: 'GET',
      query: {
        customerId: data.customerId,
        referrer: data.referrer,
        dateRange: data.dateRange,
        gatId: data.gatId,
        limit: data.limit,
        offset: data.offset,
        sortBy: data.sortBy,
        sortDir: data.sortDir
      },
      url: '/orders'
    })
  }
  
  /**
   * @param {object} data
   * @param {int} data.amount
   * @param {string} data.customerId
   * @param {string} data.cardId
   * @param {string} data.gatId
   * @param {[OrderItem]} data.orderItems
   * @return Promise
   */
  create (data) {
    return this.makeRequest({
      method: 'POST',
      data: data,
      url: '/orders'
    })
  }
  
  /**
   * @param {object} data
   * @param {string} data.orderId
   * @return Promise
   */
  delete (data) {
    return this.makeRequest({
      method: 'DELETE',
      params: { orderId: data.orderId },
      url: '/orders/{orderId}'
    })
  }
}

module.exports = OrderResource;