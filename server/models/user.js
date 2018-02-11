import mongoose, { Schema } from 'mongoose'

let userSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    projectName: String,
    username: String,
    password: String,
    createDate: String
});

export default mongoose.model('user', userSchema);