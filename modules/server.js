import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { postContact } from './controllers';

const app = express();
const PORT = process.env.PORT || 9999;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', postContact);

app.listen(PORT);
console.log(`app listening on port ${PORT}`);
