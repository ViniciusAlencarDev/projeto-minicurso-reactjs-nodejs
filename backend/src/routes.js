const Router = require('express').Router();

const UserController = require('./Controllers/User')
const TaskController = require('./Controllers/TaskController')
const ListController = require('./Controllers/ListController')

Router.post('/task/create', TaskController.create)
Router.get('/task/list', TaskController.list)
Router.post('/task/update', TaskController.update)
Router.post('/task/delete', TaskController.delete)

Router.post('/list/create', ListController.create)
Router.post('/list/delete', ListController.delete)

module.exports = Router