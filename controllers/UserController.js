const { User, Event } = require('../models');


const GetUserById = async (req, res) => {
    try {
        let userId = parseInt(req.params.id);
        const user = await User.findOne({
            where: { id: userId }
        });
        res.send(user);
    } catch (error) {
        throw error;
    }
};

const UpdateUserDetails = async (req, res) => {
    try {
        let userId = parseInt(req.params.id);
        let updatedUser = await User.update(req.body, {
            where: { id: userId },
            returning: true
        });
        res.send(updatedUser);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    GetAllUsers,
    GetUserById,
    UpdateUserDetails
};
