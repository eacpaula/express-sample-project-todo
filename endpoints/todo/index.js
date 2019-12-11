const model = require('./todo')

const endpoint = require('node-restful')
                  .model('Todo', model)
                  .methods(['get', 'post', 'put', 'delete'])
                  .updateOptions({new: true, runValidators: true})

module.exports = endpoint