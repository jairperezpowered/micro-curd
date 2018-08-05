const {send} = require('micro')

module.exports.GET = (req, res) => send(res, 200, 'Welcome to Micro-CRUD')