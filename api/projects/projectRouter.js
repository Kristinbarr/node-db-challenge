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
  Project.addTask
})

module.exports = router
