const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const OpportunitiesRouter = require('./OpportunityRouter')
const InterviewRouter = require('./InterviewRoutes')


Router.use('/users', UserRouter);
Router.use('/opportunities', OpportunitiesRouter)
Router.use('/interviews', InterviewRouter)

module.exports = Router;
