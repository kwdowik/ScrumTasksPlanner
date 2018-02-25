import User from '../models/user';
import { generateHash } from '../utils/util';

export const login = (req, res, next) => {
    let username = req.body.username;
    let userPassword = req.body.password;
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            console.error("Error: ", err);
            res.send(err);
        }
        if (user !== null && user.password === generateHash(userPassword, user.salt)) {
            res.json({
                user: user
            });
        }else {
            res.status(401);
            res.json({
                error: "Wrong login or password"
            });
        }
    });
};