// eslint-disable-next-line no-unused-vars
import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const Routes = Router();

Routes.get('/status', AppController.getStatus);
Routes.get('/stats', AppController.getStats);
Routes.post('/users', UsersController.postNew);
Routes.get('/connect', AuthController.getConnect);
Routes.get('/disconnect', AuthController.getDisconnect);
Routes.get('/users/me', UsersController.getMe);
Routes.post('/files', FilesController.postUpload);

module.exports = Routes;
