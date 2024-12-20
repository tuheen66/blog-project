/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server } from 'http';
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

let server: Server;

async function main() {
    try {
      await mongoose.connect(config.database_url as string);
  
      server = app.listen(config.port, () => {
        console.log(`app is listening on port ${config.port} 👂`);
      });
    } catch (err) {
      console.log(err);
    }
  }
  
main()
