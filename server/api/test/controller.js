import TestModel from './model';

// TODO: Reuse these utility functions across controllers
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
    TestModel.find().exec((err, tests) => {
      if(err) { return handleError(res, err); }
      res.status(200).send(tests.map((test) => {
        return {
          type: test.type,
          id: test.id,
          meta: test.meta
        };
      }));
    });
  },

  show: (req, res) => {
    TestModel.findById(req.params.id, (err, test) => {
      if(err) { return handleError(res, err); }
      if(test) {
        return res.status(200).send({
          type: test.type,
          id: test.id,
          meta: test.meta
        });
      } else {
        return handleNotFound(res);
      }
    });
  },

  create: (req, res) => {
    // TODO: Make dynamic salt, csrf, validate, handle error, etc
    let newTest = new TestModel(Object.assign({}, req.body));
    newTest.save((err) => {
      if(err) { return handleError(res, err); }
      res.status(200).send();
    });
  }
};

export default controller;