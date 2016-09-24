'use strict';

const GhostAnalyticsClientError = require('./GhostAnalyticsClientError');
const AccountResource = require('./resources/account/AccountResource');
const CustomerCardResource = require('./resources/customer/CustomerCardResource');
const CustomerResource = require('./resources/customer/CustomerResource');
const IdentityEventResource = require('./resources/identity/IdentityEventResource');
const OrderResource = require('./resources/order/OrderResource');

class GhostAnalyticsClient {
  
  constructor (options = {}) {
    
    if (!options.publicKey) {
      throw new GhostAnalyticsClientError({
        message: 'Missing required parameter "publicKey".',
        type: 'GhostAnalyticsClientError'
      });
    }
    if (!options.secretKey) {
      throw new GhostAnalyticsClientError({
        message: 'Missing required parameter "secretKey".',
        type: 'GhostAnalyticsClientError'
      });
    }
    
    this._publicKey = options.publicKey;
    this._secretKey = options.secretKey;
    
    this.account = new AccountResource(options);
    this.customerCard = new CustomerCardResource(options);
    this.customer = new CustomerResource(options);
    this.identityEvent = new IdentityEventResource(options);
    this.order = new OrderResource(options);
  }
}

module.exports = GhostAnalyticsClient;