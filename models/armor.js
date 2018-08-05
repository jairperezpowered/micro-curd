const mongoose = require('mongoose')

const ArmorSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    description: String
})

module.exports = mongoose.model('Armor', ArmorSchema)