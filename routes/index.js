// eslint-disable-next-line no-unused-vars
import { Router } from 'express';
import AppController from '../controllers/AppController';

const Routes = Router();

Routes.get('/status', AppController.getStatus);
Routes.get('/stats', AppController.getStats);


module.exports = Routes;
