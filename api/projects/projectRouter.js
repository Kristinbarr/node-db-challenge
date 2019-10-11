const express = require('express')

const router = express.Router()
const Projects = require('./projectModel')

// GET - all projects, include completed
router.get('/', (req, res) => {})

// GET - all tasks by id, include project name, project desc, completed bool
router.get('/:id', (req, res) => {})

// POST - add a new project
router.post('/', (req, res) => {})

// POST - add a new task to a project by id
router.post('/:id', (req, res) => {})

