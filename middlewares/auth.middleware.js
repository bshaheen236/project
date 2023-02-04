const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const authLogout = async (req, res, next) => {
    try {
        const token = req.cookies._token;
        const verify = jwt.verify(token, process.env.SECRET_KEY);

        const user = await userModel.findOne({ _id: verify._id });

        req.token = token;
        req.user = user;

        next();
    }
    catch (err) {
        res.status(401).send(err);
    }
}

const auth = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userModel.findOne({ _id: id });

        if (!user) {
            res.status(400).send({
                'err': `User with id ${user} not found`,
                'statusCode': 400
            })
        }

        const token = user.tokens[0].token;

        const validUser = jwt.verify(token, process.env.SECRET_KEY);

        next();
    }
    catch (err) {
        res.status(400).send(err);
    }
}

const authPass = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userModel.findOne({_id : id});
        if (!user) {
            res.status(404).send({
                'statusCode' : 404,
                'err' : 'user not found'
            })
        }

        const token = user.tokens[0].token;

        const validUser = jwt.verify(token, process.env.SECRET_KEY);

        next();
    }
    catch (err) {
        res.status(400).send({
            'statusCode': 400,
            'err': err
        })
    }
}

module.exports = { auth, authLogout, authPass }