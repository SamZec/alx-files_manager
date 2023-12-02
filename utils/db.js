import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || '27017';
    this.database = process.env.DB_DATABASE || 'files_manager';
    const uri = `mongodb://${this.host}:${this.port}/${this.database}`;
    this.client = new MongoClient(uri, { useUnifiedTopology: true });
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    await this.client;
    const collection = this.client.db().collection('users');
    return await collection.countDocuments();
  }

  async nbFiles() {
    await this.client;
    const collection = this.client.db().collection('files');
    return await collection.countDocuments();
  }
};

export const dbClient = new DBClient();
export default dbClient;