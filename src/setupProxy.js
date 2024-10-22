const path = require('path');
const express = require('express');

module.exports = function(app) {
  // Serve the .well-known directory directly
  app.use('/.well-known', express.static(path.join(__dirname, '../public/.well-known'), {
    setHeaders: (res, path) => {
      if (path.endsWith('assetlinks.json')) {
        res.setHeader('Content-Type', 'application/json');
      }
    }
  }));
};