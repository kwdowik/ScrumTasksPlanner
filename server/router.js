import express, { Router } from 'express';
// Import actions from controllers
import { getAllUsers, createUser } from './controllers/user.controller';
import {getAllTasks, createTask, updateTask, deleteTask} from "./controllers/task.controller";
import {getAllProjects, createProject} from "./controllers/project.controller";

// Initialize the router
const router = Router();

// Handle /users route with index action from movies controller
router.route('/users')
    .get(getAllUsers)
    .post(createUser);

// Handle /users route with index action from movies controller
router.route('/tasks')
    .get(getAllTasks)
    .post(createTask);

router.route('/tasks/:taskId')
    .patch(updateTask)
    .delete(deleteTask);

// Handle /users route with index action from movies controller
router.route('/projects')
    .get(getAllProjects)
    .post(createProject);

export default router;