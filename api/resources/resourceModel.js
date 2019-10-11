const db = require('../../data/dbConfig')

module.exports = {
  get,
  getById,
  add
}

function get() {
  return db('resources')
}

function getById(id) {
  return db('resources').where({ id })
}

function add(todo) {
  return db('resources').insert(todo)
}
