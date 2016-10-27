var mongoose = require('mongoose');
var data = require('../test_data/questions.json');

mongoose.connect('mongodb://127.0.0.1/project-m-dev', {});

let TestSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  meta: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

var TestModel = mongoose.model('Test', TestSchema);

data.forEach(function(question) {
  let newTest = new TestModel({
    type: 'single',
    meta: {
      question: question.question.trim(),
      choices: question.choices,
      answer: question.answer
    }
  });

  newTest.save((err) => {
    if(err) {
      console.log('Error');
    } else {
      console.log('Success')
    }
  });
});