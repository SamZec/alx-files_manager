import { app } from '../server';
import { redisClient } from '../utils/redis';
import { dbClient } from '../utils/db';

module.exports = class AppController {
  static getStatus(req, res) {
    res.status(200).json({redis: redisClient.isAlive(), db: dbClient.isAlive()});
  }

  static getStats(req, res) {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()])
      .then(([users, files]) => {
        res.status(200).json({"users": users, "files": files});
      });
  }
};