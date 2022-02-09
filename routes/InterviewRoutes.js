const Router = require('express').Router();
const controller = require('../controllers/InterviewController');

Router.get('/', controller.GetAllInterviews);
Router.get('/info', controller.GetAllInterviewsWithAllInfo);
Router.get('/info/:id', controller.GetInterviewByIdWithAllInfo);
Router.post('/', controller.CreateInterview);
Router.put('/:id', controller.UpdateInterviewDetails);
Router.delete('/:id', controller.DeleteInterview);


module.exports = Router;
