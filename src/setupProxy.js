const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const express = require('express');

module.exports = function(app) {
  // Serve local files during development
  app.use('/.well-known', express.static(path.join(__dirname, '../public/.well-known'), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('assetlinks.json')) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
      }
    }
  }));

  // Fallback proxy for production URL
  app.use(
    '/.well-known/assetlinks.json',
    createProxyMiddleware({
      target: 'https://referral.dvtechventures.com',
      changeOrigin: true,
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Content-Type'] = 'application/json';
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      onError: function(err, req, res) {
        console.error('Proxy Error:', err);
        // Serve local file as fallback if proxy fails
        res.sendFile(path.join(__dirname, '../public/.well-known/assetlinks.json'));
      }
    })
  );
};