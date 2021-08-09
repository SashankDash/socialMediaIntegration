import Mongoose from 'mongoose';
import { DB_URL, dbOptions } from '../config/index.js';

class DataBase {
  connect =  () => {
    try {
    Mongoose.connect(DB_URL, dbOptions);
      const connection = Mongoose.connection;

      connection.on('error', (err) => {
        console.error(`MongoDB event error: ${err}`);
      });
      connection.on('connected', () => {
        console.log('MongoDB event connected');
      });

      connection.on('disconnected', () => {
        console.log('MongoDB event disconnected');
      });

      connection.on('reconnected', () => {
        console.log('MongoDB event reconnected');
      });

      connection.once('open', () => {
        console.log('Database connected');
      });
    } catch (err) {
      console.error('Databse error');
    }
  };
}
export default new DataBase();
