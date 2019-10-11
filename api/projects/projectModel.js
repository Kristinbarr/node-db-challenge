const db = require('../../data/dbConfig')

module.exports = {
  getProjects,
  getTasksById,
  addProject,
  addTaskById
}

function getProjects() {
  return db('projects')
}

function getTasksById(id) {
  return db('tasks').where({ id })
}

function addProject(project) {
  return db('projects').insert(project)
}

function addTaskById(id, task) {
  return db('tasks').insert(task)
}
