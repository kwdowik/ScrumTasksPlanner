import mongoose, { Schema } from 'mongoose'

let userSchema = new Schema({
    projectName: String,
    username: String,
    password: String,
    createDate: String,
    photo: String
});

export default mongoose.model('user', userSchema);