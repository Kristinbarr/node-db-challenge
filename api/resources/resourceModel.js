const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add
}

function find() {
  return db('resources')
}

function findById(id) {
  return db('resources').where({ id })
}

function add(resource) {
  return db('resources').insert(resource)
}
