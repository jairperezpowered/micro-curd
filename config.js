const mongodb = 'mongodb://jairperezpowered:D1e560*9c@ds139242.mlab.com:39242/armor'
const {Armor} = require('./models')
const {ArmorCtrl} = require('./controllers')

module.exports = {
    mongodb,
    Armor,
    ArmorCtrl
}