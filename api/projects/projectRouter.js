const express = require('express')

const router = express.Router()
const Project = require('./projectModel')

// GET - all projects, include completed
router.get('/', (req, res) => {
  Project.findProjects()
    .then((projects) => {
      res.status(200).json(projects)
    })
    .catch((err) => {
      res.status(200).json(err)
    })
})

// GET - all tasks by id, include project name, project desc, completed bool
router.get('/:id/tasks', (req, res) => {
  Project.findTasksByProjectId(req.params.id)
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

// POST - add a new project
router.post('/', (req, res) => {
  Project.addProject(req.body)
    .then((project) => {
      res.status(200).json(req.body)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

// POST - add a new task to a project by id
router.post('/:id', (req, res) => {
  //adding param project id to req.body
  req.body.project_id = req.params.id

  Project.addTask(req.body)
    .then(ids => {
      const id = ids[0]
      return Project.findTaskByTaskId(id)
    })
    .then((task) => {
      res.status(200).json(task)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

module.exports = router
