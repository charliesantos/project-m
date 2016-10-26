import express from 'express';
import path from 'path';
import api from './api';

let app = express();
let port = parseInt(process.env.PORT, 10) || 3030;

api.init(app);

app.use('/', express.static(path.join(__dirname, '../client')));

console.log("Server listening at " + port);
app.listen(port);