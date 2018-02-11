import mongoose, { Schema } from 'mongoose'

let projectSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    projectName: {
        type: String,
        unique: true
    },
    createDate: String,
});

export default mongoose.model('project', projectSchema);