import mongoose, { Schema } from 'mongoose'

let taskSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    projectName: String,
    assignedTo: String,
    createDate: String,
    priority: String,
    state: String,
    userImg: String,
});

export default mongoose.model('task', taskSchema);