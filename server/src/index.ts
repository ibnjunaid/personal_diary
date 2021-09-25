import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/authRoutes';
import { connect } from 'mongoose';

const App = express();

App.use(morgan('tiny'))

App.use(cors())

App.use(express.json())

App.use('/api/auth', authRoutes)

connect('mongodb://localhost:27017/diary',(err) => {
    if(err){
        console.error("An error occured while connecting to database");
        console.error(err);
        process.exit(-1);
    } else {
        console.info("Sucessfully connected to database on ", (new Date).toString());
    }
})

App.listen(5000, () => {
    console.log(`Server listening on http://localhost:5000`);
})