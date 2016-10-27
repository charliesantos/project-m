import { verify } from 'jsonwebtoken';
import compose from 'composable-middleware';
import config from '../config';
import UserModel from '../api/user/model';

let handleUnauthorized = (res) => {
  res.status(401).end();
};

let auth = {
  isAuthenticated: () => {
    return compose()
    .use((req, res, next) => {
      let token = req.headers.token || req.cookies.token;
      if(!token) { return handleUnauthorized(res); }

      verify(token, config.jwt.secret, (verifyErr, data) => {
        if(verifyErr || !data || !data.email) { return handleUnauthorized(res); }
        
        UserModel.find()
        .where({ email: data.email })
        .exec((err, users) => {
          if(err) { return handleUnauthorized(res); }

          if(users && users.length) {
            // Attach the user object
            req.user = { email: users[0].email };
            next();
          } else {
            return handleUnauthorized(res);
          }
        });
      });
    });
  }
};

export default auth;