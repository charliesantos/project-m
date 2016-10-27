// http://tests.com/practiceresult/computer-skills-practice-test
var questions = [];
for(var a = 0; a < trs.length;a++){
  var tr = $(trs[a]);
  var parts = tr.find('tr');
  var question = $($(parts[0]).find('td')[1]).text();

  var choices = [];
  var answer;
  for(var b = 1; b < parts.length; b++){
    var choice = $($(parts[b]).find('td')[2]).text();
    if($($(parts[b]).find('td')[1]).find('img').length){
      answer = b-1;
    }
    choices.push(choice);
  }
  questions.push({question: question, choices: choices, answer: answer});
}
console.log(JSON.stringify(questions));