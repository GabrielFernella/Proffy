import express from 'express';

//import Controllers
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesController = new ClassesController();

//Routes
routes.post('/classes', classesController.create)



export default routes;