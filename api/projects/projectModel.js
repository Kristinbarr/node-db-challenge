const db = require('../../data/dbConfig')

module.exports = {
  findProjects,
  findTasksByProjectId,
  addProject,
  addTask
}

function findProjects() {
  return db('projects')
}

// include project name, project desc, completed bool
function findTasksByProjectId(id) {
  return db('tasks as t')
  .join('projects as p', 'p.id', 't.project_id')
  .select('t.id', 'p.name as projectName', 'p.description', 'p.completed')
  .where({ id })
}

function addProject(project) {
  return db('projects').insert(project)
}

function addTask(task) {
  return db('tasks').insert(task)
}
