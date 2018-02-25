import bcrypt from "bcrypt-nodejs";

export const getSalt = () => {
    return bcrypt.genSaltSync(8);
};

export const generateHash = (password, passwordSalt) => {
    return bcrypt.hashSync(password, passwordSalt, null);
};

