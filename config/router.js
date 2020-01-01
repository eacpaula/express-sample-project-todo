var express = require('express');
var router = express.Router();

module.exports = function(server){
  server.use('/api', router)
  
  const todoEndpoint = require('../endpoints/todo')
  todoEndpoint.register(router, '/todos')
};