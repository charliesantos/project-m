import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';

let auth = {
  isAuthenticated: () => {
    return compose()
    .use((req, res, next) => {
      console.log(req.cookies);
      res.status(401).end();
    });
  }
};

export default auth;