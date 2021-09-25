import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/authRoutes';

const App = express();

App.use(morgan('tiny'))

App.use(cors())

App.use(express.json())

App.use('/auth', authRoutes)



App.listen(5000, () => {
    console.log(`Server listening on http://localhost:5000`);
})