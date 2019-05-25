const express = require('express')
const app = express()

var https = require('https'),
    httpProxy = require('http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: 'https://youtube.com',
  agent  : https.globalAgent,
  headers: {
    host: 'youtube.com'
  }
}).listen(8012);



