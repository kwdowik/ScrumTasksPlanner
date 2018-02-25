import User from '../models/user';
import { getSalt, generateHash } from '../utils/util';

export const getAllUsers = (req, res, next) => {
    User.find().lean().exec((err, users) => res.json(users))
};

export const createUser = (req, res, next) => {
    let salt = getSalt();
    const user = new User({
        projectName: req.body.projectName,
        username: req.body.username,
        password: generateHash(req.body.password, salt),
        salt: salt,
        createDate: req.body.createDate,
        photo: req.body.photo
    });
    user.save((err, createdUser) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(createdUser);
    });
};