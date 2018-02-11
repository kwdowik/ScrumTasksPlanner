import User from '../models/user';

export const getAllUsers = (req, res, next) => {
    User.find().lean().exec((err, users) => res.json(users))
};

export const createUser = (req, res, next) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err, createdUser) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(createdUser);
    });
};