import express from 'express';
import pdf from './pdf';

const app = express();

app.use(express.json());
app.use(pdf);

app.listen(process.env.PORT || 3333);