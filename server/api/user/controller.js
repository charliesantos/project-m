import { sign } from 'jsonwebtoken';
import moment from 'moment';
import UserModel from './model';
import config from '../../config';

let handleError = (res, err, statusCode) => {
  statusCode = statusCode || 500;
  console.log(err);
  res.status(statusCode).send('error');
};

let handleNotFound = (res, msg) => {
  res.status(404).send(msg || '');
};

let controller = {
  index: (req, res) => {
    UserModel.find().exec((err, users) => {
      if(err) { return handleError(res, err); }
      res.status(200).send(users.map((user) => {
        return { email: user.email };
      }));
    });
  },

  create: (req, res) => {
    // TODO: Make dynamic salt, csrf, validate, handle error, etc
    let newUser = new UserModel(Object.assign({}, req.body, { salt: '12345' }));
    newUser.save((err) => {
      if(err) { return handleError(res, err); }
      res.status(200).send();
    });
  },

  // TODO: Implement Oauth2
  auth: (req, res) => {
    UserModel.find()
      .where({
        email: req.body.email,
        password: req.body.password
      })
      .exec((err, users) => {
        if(err) { return handleError(res, err); }
        if(users && users.length && users[0].email === req.body.email) {
          let token = sign({
            email: users[0].email,
            stamp: Date.now()
          }, config.jwt.secret, {
            // 24 hours
            expiresIn: 60 * 60 * 24
          });
          let expires = (new moment()).add(12, 'hours').toDate();
          res.cookie('token', token, {
            expires: expires
          });
          return res.status(200).send();
        } else {
          return handleNotFound(res);
        }
      });
  }
};

export default controller;