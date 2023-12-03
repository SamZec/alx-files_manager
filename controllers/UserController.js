import { app } from '../server';
import { dbClient } from '../utils/db';
const crypto = require('crypto');

module.exports = class UserController {
  static async postNew(req, res) {
    if (req.body.email === undefined || req.body.email.trim() === '') {
      return res.status(400).json({error: 'Missing email'}).end();
    }
    if (req.body.password === undefined || req.body.password.trim() === '') {
      return res.status(400).json({error: 'Missing password'}).end();
    }
    const email = req.body.email;
    const checkEmail = await dbClient.checkEmail(email);
    if (checkEmail !== null && email === checkEmail.email) {
      return res.status(400).json({error: 'Already exist'}).end();
    }
    const password = crypto.createHash('sha1')
      .update(req.body.password)
      .digest('hex');
    const user = await dbClient.addUser(email, password);
    res.status(200).json({id: user.ops[0]._id, email: user.ops[0].email}).end();
  }
};