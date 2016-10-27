import user from './user';
import test from './test';

function init(app) {
  app.use('/api/users', user);
  app.use('/api/tests', test);
}

export default { init };