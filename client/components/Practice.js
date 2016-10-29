import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Practice extends Component {
  render() {
    return (
      <div className='practice'>
        <Paper className='paper' zDepth={2}>
          <div className='footer'>
            <RaisedButton
              label='Previous'
              disabled={this.props.q_index === 0 ? true : false}
              onClick={this.onPrevious.bind(this)}/>
            <RaisedButton
              label='Next'
              disabled={this.props.q_index === this.props.questions.length-1 ? true : false}
              onClick={this.onNext.bind(this)}/>
          </div>
        </Paper>
      </div>
    );
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