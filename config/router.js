var express = require('express');
var router = express.Router();

module.exports = function(server){
  server.use('/api', router)

  /* GET home page. */
  // router.get('/', function(req, res, next) {
  //   res.render('index', { title: 'Express' });
  // });
  const todoEndpoint = require('../endpoints/todo')
  todoEndpoint.register(router, '/todos')
};