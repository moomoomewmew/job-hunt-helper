const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.get('/:id', controller.GetUserById);
Router.put('/:id', controller.UpdateUserDetails);

module.exports = Router;
