const {ArmorCtrl} = require('../../../config')

module.exports.GET = (req, res) => ArmorCtrl.getAll(req, res)
module.exports.POST = (req, res) => ArmorCtrl.save(req, res)