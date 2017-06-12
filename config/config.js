var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-bootstrap'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-bootstrap-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-bootstrap'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-bootstrap-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-bootstrap'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-bootstrap-production'
  }
};

module.exports = config[env];
