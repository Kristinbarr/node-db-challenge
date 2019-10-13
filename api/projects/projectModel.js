const db = require('../../data/dbConfig')

module.exports = {
  findProjects,
  findProjectById,
  findTaskById,
  findTasksByProjectId,
  addProject,
  addTask
}

function findProjects() {
  return db('projects')
}

function findProjectById(id) {
  return db('projects as p')
    .select('p.name', 'p.description', 'p.completed')
    .where({ id })
    .first()
}

function findTaskById(id) {
  return db('tasks').where({ id })
}

// include project name, project desc, completed bool
function findTasksByProjectId(id) {
  return db('tasks as t')
    .join('projects as p')
    .select(
      't.id',
      't.description',
      't.completed',
      't.notes',
    )
    .where('p.id', '=', id)
}

function addProject(project) {
  return db('projects').insert(project)
}

function addTask(task) {
  return db('tasks').insert(task)
}
