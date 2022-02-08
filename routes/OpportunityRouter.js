const Router = require('express').Router();
const controller = require('../controllers/OpportunityController');

Router.get('/', controller.GetAllOpportunities);
Router.get('/info', controller.GetAllOpportunitiesWithAllInfo);
Router.get('/info/:id', controller.GetOpportunityByIdWithAllInfo);
Router.post('/', controller.CreateOpportunity);
Router.put('/:id', controller.UpdateOpportunityDetails);
Router.delete('/:id', controller.DeleteOpportunity);


module.exports = Router;
