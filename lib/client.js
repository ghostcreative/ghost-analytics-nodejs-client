'use strict';

Ghost.DEFAULT_HOST = 'api.ghostcreative.io';
Ghost.DEFAULT_PORT = '443';
Ghost.DEFAULT_BASE_PATH = '/v1/';
Ghost.DEFAULT_API_VERSION = null;

// Use node's default timeout:
Ghost.DEFAULT_TIMEOUT = require('http').createServer().timeout;

Ghost.PACKAGE_VERSION = require('../package.json').version;

Ghost.USER_AGENT = {
  bindings_version: Ghost.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  publisher: 'ghost',
  uname: null,
};

Ghost.USER_AGENT_SERIALIZED = null;

const exec = require('child_process').exec;

const resources = {
  // Support Accounts for consistency, Account for backwards compat
  Accounts: require('./resources/Accounts'),
  Charges: require('./resources/Charges'),
  Customers: require('./resources/Customers')
  
};

Ghost.GhostResource = require('./GhostResource');
Ghost.resources = resources;

function Ghost(key, version) {
  if (!(this instanceof Ghost)) {
    return new Ghost(key, version);
  }
  
  this._api = {
    auth: null,
    host: Ghost.DEFAULT_HOST,
    port: Ghost.DEFAULT_PORT,
    basePath: Ghost.DEFAULT_BASE_PATH,
    version: Ghost.DEFAULT_API_VERSION,
    timeout: Ghost.DEFAULT_TIMEOUT,
    agent: null,
    dev: false,
  };
  
  this._prepResources();
  this.setApiKey(key);
  this.setApiVersion(version);
}

Ghost.prototype = {
  
  setHost: function(host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },
  
  setProtocol: function(protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },
  
  setPort: function(port) {
    this._setApiField('port', port);
  },
  
  setApiVersion: function(version) {
    if (version) {
      this._setApiField('version', version);
    }
  },
  
  setApiKey: function(key) {
    if (key) {
      this._setApiField(
        'auth',
        'Basic ' + new Buffer(key + ':').toString('base64')
      );
    }
  },
  
  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Ghost.DEFAULT_TIMEOUT : timeout
    );
  },
  
  setHttpAgent: function(agent) {
    this._setApiField('agent', agent);
  },
  
  _setApiField: function(key, value) {
    this._api[key] = value;
  },
  
  getApiField: function(key) {
    return this._api[key];
  },
  
  getConstant: function(c) {
    return Ghost[c];
  },
  
  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent: function(cb) {
    if (Ghost.USER_AGENT_SERIALIZED) {
      return cb(Ghost.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Ghost.USER_AGENT, function(cua) {
      Ghost.USER_AGENT_SERIALIZED = cua;
      cb(Ghost.USER_AGENT_SERIALIZED);
    })
  },
  
  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded: function(seed, cb) {
    exec('uname -a', function(err, uname) {
      var userAgent = {};
      for (var field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }
      
      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';
      
      cb(JSON.stringify(userAgent));
    });
  },
  
  _prepResources: function() {
    for (var name in resources) {
      this[
      name[0].toLowerCase() + name.substring(1)
        ] = new resources[name](this);
    }
  },
  
};

module.exports = Ghost;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Ghost = Ghost;