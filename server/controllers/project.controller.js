import Project from '../models/project';

export const getAllProjects = (req, res, next) => {
    Project.find().lean().exec((err, users) => res.json(users))
};

export const createProject = (req, res, next) => {
    console.log(req.body);
    const project = new Project(req.body);
    project.save((err, createdProject) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(createdProject);
    });
};