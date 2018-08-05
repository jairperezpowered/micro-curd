const {send,json} = require('micro')
const {Armor} = require('../models')

function getAll(req, res) {
    const findArmor = Armor.find()

    findArmor.then(data => {
        send(res, 200, data)
    })
}

async function single(req, res) {
    const id = req.params.id.length === 24 ? req.params.id : false
    
    if(!id) return send(res, 500, {success: false, message: 'Invalid id'})

    const single = Armor.findById(id)
    
    single.then(doc => send(res, 200, {success: true, armor: doc}))
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

async function update(req, res) {
    const {name, description} = await json(req)
    const id = req.params.id.length === 24 ? req.params.id : false
    
    if(!id) return send(res, 500, {success: false, message: 'Invalid id'})
    if(!name || !description) return send(res, 400, {success: false, message: 'incomplete data'})

    const update = Armor.findByIdAndUpdate(id, {name, description})
    
    update.then(doc => send(res, 200, {success: true, message: 'Update armor correctly!'}))
}

async function remove(req, res) {
    const id = req.params.id.length === 24 ? req.params.id : false
    
    if(!id) return send(res, 500, {success: false, message: 'Invalid id'})

    const update = Armor.findByIdAndRemove(id)
    
    update.then(doc => send(res, 200, {success: true, message: 'Remove armor correctly!'}))
}

module.exports = {
    getAll,
    single,
    save,
    update,
    remove
}