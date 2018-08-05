const {send,json} = require('micro')
const {Armor} = require('../models')

function getAll(req, res) {
    const findArmor = Armor.find()

    findArmor.then(data => {
        send(res, 200, data)
    })
}

async function save(req, res) {
    const {name, description} = await json(req)

    if(!name || !description) return send(res, 400, {success: false, message: 'incomplete data'})

    const data = new Armor({
        name,
        description
    })

    const save = data.save()
    save.then(doc => {
        send(res, 200, {success: true, message: 'Save armor correctly!', armor: doc})
    })
}

module.exports = {
    getAll,
    save
}