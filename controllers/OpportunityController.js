const { User, Opportunity, OpportunityUser } = require('../models');

const GetAllOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.findAll();
        res.send(opportunities);
    } catch (error) {
        throw error;
    }
};


const GetAllOpportunitiesWithAllInfo = async (req, res) => {
    try {
        const opportunitiesAndInfo = await Opportunity.findAll({
            include: [
                {
                    model: User,
                    as: 'attendees',
                    through: { attributes: [] }
                },
                { model: User, as: 'owner' }
            ]
        });
        res.send(opportunitiesAndInfo);
    } catch (error) {
        console.log(error);
    }
};

const GetAllOpportunitiesWithOwners = async (req, res) => {
    try {
        const opportunitiesAndOwners = await Opportunity.findAll({
            include: [{ model: User, as: 'owner' }]
        });
        res.send(opportunitiesAndOwners);
    } catch (error) {
        console.log(error);
    }
};


const GetOpportunityByIdWithAllInfo = async (req, res) => {
    try {
        let opportunityId = parseInt(req.params.id);
        const opportunityAndInfo = await Opportunity.findOne({
            where: { id: opportunityId },
            include: [
                {
                    model: User,
                    as: 'attendees',
                    through: { attributes: [] }
                },
                { model: User, as: 'owner' }
            ]
        });
        res.send(opportunityAndInfo);
    } catch (error) {
        console.log(error);
    }
};

const CreateOpportunity = async (req, res) => {
    try {
        let newOpportunity = await Opportunity.create(req.body);
        res.send(newOpportunity);
    } catch (error) {
        throw error;
    }
};

const UpdateOpportunityDetails = async (req, res) => {
    try {
        let opportunityId = parseInt(req.params.id);
        let updatedOpportunity = await Opportunity.update(req.body, {
            where: { id: opportunityId },
            returning: true
        });
        res.send(updatedOpportunity);
    } catch (error) {
        throw error;
    }
};

const DeleteOpportunity = async (req, res) => {
    try {
        let opportunityId = parseInt(req.params.id);
        await Opportunity.destroy({ where: { id: opportunityId } });
        res.send(`Deleted opportunity with an id of ${opportunityId}`);
    } catch (error) {
        throw error;
    }
};


module.exports = {
    GetAllOpportunities,
    GetAllOpportunitiesWithOwners,
    GetAllOpportunitiesWithAllInfo,
    GetOpportunityByIdWithAllInfo,
    CreateOpportunity,
    UpdateOpportunityDetails,
    DeleteOpportunity,
};
