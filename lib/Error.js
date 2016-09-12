'use strict';

class GhostAnalyticsClientError extends Error {
  
  constructor (options = {}) {
  
    super(options.message);
  
    this.name = this.constructor.name;
    this.message = options.message;
  
    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(this, this.constructor);
    else this.stack = (new Error(message)).stack;
  }
    
}

module.exports = GhostAnalyticsClientError;