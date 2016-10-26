import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import config from './config';
import api from './api';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

let app = express();
let port = parseInt(process.env.PORT, 10) || 3030;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

api.init(app);

app.use('/', express.static(path.join(__dirname, '../client')));

console.log("Server listening at " + port);
app.listen(port);