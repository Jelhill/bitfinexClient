import * as express from 'express'
import * as  morgan from 'morgan';

import route from './route'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/', route);


export default app;