import mongoose, { Schema } from 'mongoose'

let userSchema = new Schema({
    projectName: String,
    username: String,
    password: String,
    createDate: String
});

export default mongoose.model('user', userSchema);