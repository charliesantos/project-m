import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class Practice extends Component {
  render() {
    let questionsAnswered = 0;
    let itemsRemaining = this.props.questions.length;
    if(this.answers) {
      questionsAnswered = Object.keys(this.answers).length;
      itemsRemaining = this.props.questions.length - questionsAnswered;
    }
    return (
      <div className='practice'>
        <Paper className='paper-question' zDepth={2}>
          { this.getQuestion() }
          <div className='footer'>
            <RaisedButton
              label='Previous'
              disabled={this.props.q_index === 0 ? true : false}
              onClick={this.onPrevious.bind(this)}/>
            {this.props.q_index === this.props.questions.length-1 ?
              <RaisedButton
                label='Submit'
                onClick={() => window.alert('Coming Soon!')}
              /> :
              <RaisedButton
                label='Next'
                onClick={this.onNext.bind(this)}
              />
            }
          </div>
        </Paper>

        <Paper className='paper-test-info' zDepth={2}>
          <div className='info title'>
            <div className='label'>{'Title:'}</div>
            <div className='value'>{'Computer Specialist'}</div>
          </div>
          <div className='info level'>
            <div className='label'>{'Level:'}</div>
            <div className='value'>{'3'}</div>
          </div>
          <div className='info code'>
            <div className='label'>{'Code:'}</div>
            <div className='value'>{'278634'}</div>
          </div>
        </Paper>

        <Paper className='paper-progress-info' zDepth={2}>
          <div className='info num-answered'>
            <div className='label'>{'Questions Answered:'}</div>
            <div className='value'>{questionsAnswered + ' of ' + this.props.questions.length}</div>
          </div>
          <div className='info items-remaining'>
            <div className='label'>{'Items Remaining:'}</div>
            <div className='value'>{itemsRemaining}</div>
          </div>
        </Paper>
      </div>
    );
  }
  getQuestion() {
    if(!this.props.questions.length) {
      return (<div className='loading-msg'>{'Loading questions...'}</div>);
    }

    let item = this.props.questions[this.props.q_index];
    let choices = [];
    for(let a = 0; a < item.choices.length; a++) {
      choices.push(
        <RadioButton
          className='radio-choice'
          value={a}
          label={item.choices[a]}
        />
      );
    }
    choices.push(
      <RadioButton
        className='radio-choice none'
        value={'none'}
        label={'none'}
      />
    );

    let valueSelected = 'none';
    if(this.answers && typeof this.answers[this.props.q_index] !== 'undefined') {
      valueSelected = this.answers[this.props.q_index];
    }

    return (
      <div className='question-area'>
        <div className='question-number'>{(this.props.q_index + 1) + ')'}</div>
        <div className='question-title'>{item.question.trim()}</div>
        <RadioButtonGroup
          className='choices'
          name='choices'
          onChange={this.onRadioCheck.bind(this)}
          valueSelected={valueSelected}>
          { choices }
        </RadioButtonGroup>
      </div>
    );
  }
  onRadioCheck(e, val) {
    if(!this.answers) {
      this.answers = {};
    }
    this.answers[this.props.q_index] = val;
  }
  onNext() {
    let index = this.props.q_index + 1;
    if(index < this.props.questions.length) {
      this.props.updateQIndex(index);
    }
  }
  onPrevious() {
    let index = this.props.q_index - 1;
    if(index >= 0) {
      this.props.updateQIndex(index);
    }
  }
}

export default Practice;