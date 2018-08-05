const {ArmorCtrl} = require('../../../config')

module.exports.GET = (req, res) => ArmorCtrl.single(req, res)
module.exports.PUT = (req, res) => ArmorCtrl.update(req, res)
module.exports.DELETE = (req, res) => ArmorCtrl.remove(req, res)

module.exports.path = '/api/armor/:id'