import mongoose from 'mongoose'
import User from './models/user'
import Task from './models/task'
import Project from './models/project'

const users = [
    {
        id: "e325292e-cdb8-e259-83a7-3a02e8560d88",
        username: "Test",
        password: "$2a$10$9195nQWSozCFURl38LMOS.41hBALRY3N33wOplrJFNQP1qYnUrpV2",
        createDate: "01.02.2018, 07:29:02",
        projectName: "project1"
    },
    {
        id: "2f7085b8-aa35-cc46-dc86-4c8702651e92",
        username: "Test2",
        password: "$2a$10$ADfbxPJE715eAa23nhNIROffHNsR3gYA.lXUhLoVN0z37Yk1z.t4.",
        createDate: "10.02.2018, 11:49:02",
        projectName: "project3"
    },
];

const projects = [
    {
        id: "08645d65-c86e-cebe-cb1e-0ecb4e3b9f62",
        projectName: "project3",
        createDate: "10.02.2018, 11:49:02"
    },
    {
        id: "1afacd8f-9704-5132-004d-d3a28f4b4068",
        projectName: "project2",
        createDate: "10.02.2018, 11:49:49"
    },
    {
        id: "1etacd8f-9704-5132-004d-d3a28f4b4068",
        projectName: "project1",
        createDate: "05.02.2018, 11:49:49"
    }
];

const tasks = [
    {
        assignedTo: "Andrew",
        createDate: "07.02.2018, 12:45:31",
        priority: "medium",
        name: "Add screen to display all passengers",
        userImg: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        state: "new",
        projectName: "project1",
        id: "4a3c186b-8fb2-e111-03c2-fc73d306d6ed"
    },
    {
        assignedTo: "Kacper",
        createDate: "04.02.2018, 12:45:31",
        priority: "high",
        name: "Task4",
        userImg: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        state: "done",
        projectName: "project2",
        id: "4d6c186b-9gb2-e111-03c2-fc73d306d6ed"
    },
    {
        assignedTo: "Kacper",
        createDate: "12.10.2017, 12:35:31",
        priority: "high",
        name: "Task5",
        userImg: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        state: "in progress",
        projectName: "project2",
        id: "4d6c186b-8fb2-e111-03c2-fc73d306d6ww"
    },
    {
        assignedTo: "Andrew",
        createDate: "04.12.2017, 15:25:21",
        priority: "high",
        name: "Task12",
        userImg: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        state: "new",
        projectName: "project2",
        id: "4d6c186b-9gb2-e111-03c2-fc73d226d6ed"
    },
    {
        assignedTo: "Peter",
        createDate: "01.09.2017, 10:35:31",
        priority: "high",
        name: "Old task",
        userImg: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        state: "in progress",
        projectName: "project1",
        id: "4d6c186b-8fb2-e111-03c2-fc33d306d6ww"
    }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/scrumTaskPlannerDb');

// Go through each user
users.map(data => {
    // Initialize a model with movie data
    const user = new User(data);
    // and save it into the database
    user.save();
});

// Go through each task
tasks.map(data => {
    // Initialize a model with movie data
    const task = new Task(data);
    // and save it into the database
    task.save();
});

// Go through each project
projects.map(data => {
    // Initialize a model with movie data
    const project = new Project(data);
    // and save it into the database
    project.save();
});