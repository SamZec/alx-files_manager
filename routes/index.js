// eslint-disable-next-line no-unused-vars
import { Router } from 'express';
import AppController from '../controllers/AppController';
import UserController from '../controllers/UserController';

const Routes = Router();

Routes.get('/status', AppController.getStatus);
Routes.get('/stats', AppController.getStats);
Routes.post('/users', UserController.postNew);

module.exports = Routes;
