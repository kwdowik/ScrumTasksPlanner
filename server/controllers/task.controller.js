import Task from '../models/task';

export const getAllTasks = (req, res, next) => {
    Task.find().lean().exec((err, users) => res.json(users))
};

export const createTask = (req, res, next) => {
    console.log(req.body);
    const task = new Task(req.body);
    task.save((err, createdTask) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(createdTask);
    });
};

export const updateTask = (req, res, next) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err) {
            res.status(500).send(err);
        } else {
            task.name = req.body.name || task.name;
            task.projectName = req.body.projectName || task.projectName;
            task.assignedTo = req.body.assignedTo || task.assignedTo;
            task.createDate = req.body.createDate || task.createDate;
            task.priority = req.body.priority || task.priority;
            task.state = req.body.state || task.state;
            task.userImg = req.body.userImg || task.userImg;

            // Save the updated document back to the database
            task.save((err, task) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(task);
            });
        }
    })
};

export const deleteTask = (req, res, next) => {
    Task.findByIdAndRemove(req.params.taskId, (err, task) => {
        let response = {
            message: 'Task successfully deleted',
            id: task.id
        };
        res.status(200).send(response);
    });
};