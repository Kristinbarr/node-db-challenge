const db = require('../../data/dbConfig')

module.exports = {
  findProjects,
  findTaskByTaskId,
  findTasksByProjectId,
  addProject,
  addTask
}

function findProjects() {
  return db('projects')
}

function findTaskByTaskId(id) {
  return db('tasks')
  .where({id})
}

// include project name, project desc, completed bool
function findTasksByProjectId(id) {
  return db('tasks as t')
    .join('projects as p')
    .select('t.id as task_id', 't.description as task_desc', 't.completed','t.notes','p.name as proj_name', 'p.description as proj_desc')
    .where('p.id', '=', id)
}

function addProject(project) {
  return db('projects').insert(project)
}

function addTask(task) {
  return db('tasks').insert(task)
}
