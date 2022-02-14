const { User } = require('../models');
const middleware = require('../middleware');

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { userName: req.body.userName },
            raw: true
        });
        if (
            user &&
            (await middleware.comparePassword(user.password, req.body.password))
        ) {
            let payload = {
                id: user.id,
                userName: user.userName
            };
            let token = middleware.createToken(payload);
            return res.send({ user: payload, token });
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
    } catch (error) {
        throw error;
    }
};

const Register = async (req, res) => {
    try {
        const { password, userName } = req.body;
        let passwordDigest = await middleware.hashPassword(password);
        const user = await User.create({ password:passwordDigest, userName });
        res.send(user);
    } catch (error) {
        throw error;
    }
};

const UpdatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = await User.findByPk(req.params.user_id);
        if (
            user &&
            (await middleware.comparePassword(
                user.dataValues.passwordDigest,
                oldPassword
            ))
        ) {
            let passwordDigest = await middleware.hashPassword(newPassword);
            await user.update({ passwordDigest });
            return res.send({ status: 'Ok', payload: user });
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
    } catch (error) {
        throw error;
    }
};

const DeleteUser = async (req, res) => {
    try {
        const { password } = req.body;
        const user = await User.findByPk(req.params.user_id);
        if (
            user &&
            (await middleware.comparePassword(
                user.dataValues.passwordDigest,
                password
            ))
        ) {
            let userId = parseInt(user.id);
            await user.destroy({ where: { id: userId } });
            return res.send(`Deleted user with an id of ${userId}`);
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
    } catch (error) {
        throw error;
    }
};

const CheckSession = async (req, res) => {
    const { payload } = res.locals;
    res.send(payload);
};

module.exports = {
    Login,
    Register,
    UpdatePassword,
    CheckSession,
    DeleteUser
};

