const db = require('../../data/dbConfig')

module.exports = {
  find,
  findResourcesByProjectId,
  findById,
  add
}

function find() {
  return db('resources')
}

function findResourcesByProjectId(id) {
  return db('resources as r')
    .join('projects as p')
    .select(
      'r.id as resource_id',
      'r.name',
      'r.description'
    )
    .where('p.id', '=', id)
}

function findById(id) {
  return db('resources').where({ id }).first()
}

function add(resource) {
  return db('resources').insert(resource)
}
