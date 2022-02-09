const { User, Interview } = require('../models');

const GetAllInterviews = async (req, res) => {
    try {
        const interviews = await Interview.findAll();
        res.send(interviews);
    } catch (error) {
        throw error;
    }
};


const GetAllInterviewsWithAllInfo = async (req, res) => {
    try {
        const interviewsAndInfo = await Interview.findAll({
            include: [
                {
                    model: User,
                    as: 'attendees',
                    through: { attributes: [] }
                },
                { model: User, as: 'owner' }
            ]
        });
        res.send(interviewsAndInfo);
    } catch (error) {
        console.log(error);
    }
};

const GetAllInterviewsWithOwners = async (req, res) => {
    try {
        const interviewsAndOwners = await Interview.findAll({
            include: [{ model: User, as: 'owner' }]
        });
        res.send(interviewsAndOwners);
    } catch (error) {
        console.log(error);
    }
};


const GetInterviewByIdWithAllInfo = async (req, res) => {
    try {
        let interviewId = parseInt(req.params.id);
        const interviewAndInfo = await Interview.findOne({
            where: { id: interviewId },
            include: [
                {
                    model: User,
                    as: 'attendees',
                    through: { attributes: [] }
                },
                { model: User, as: 'owner' }
            ]
        });
        res.send(interviewAndInfo);
    } catch (error) {
        console.log(error);
    }
};

const CreateInterview = async (req, res) => {
    try {
        let newInterview = await Interview.create(req.body);
        res.send(newInterview);
    } catch (error) {
        throw error;
    }
};

const UpdateInterviewDetails = async (req, res) => {
    try {
        let interviewId = parseInt(req.params.id);
        let updatedInterview = await Interview.update(req.body, {
            where: { id: interviewId },
            returning: true
        });
        res.send(updatedInterview);
    } catch (error) {
        throw error;
    }
};

const DeleteInterview = async (req, res) => {
    try {
        let interviewId = parseInt(req.params.id);
        await Interview.destroy({ where: { id: interviewId } });
        res.send(`Deleted interview with an id of ${interviewId}`);
    } catch (error) {
        throw error;
    }
};


module.exports = {
    GetAllInterviews,
    GetAllInterviewsWithOwners,
    GetAllInterviewsWithAllInfo,
    GetInterviewByIdWithAllInfo,
    CreateInterview,
    UpdateInterviewDetails,
    DeleteInterview,
};
