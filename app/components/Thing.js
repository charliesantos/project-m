import React, { Component, PropTypes } from 'react';

class Thing extends Component {
  render() {
    return (
      <div className='thing'>
        <input
          type='text'
          value={this.props.userText}
          onChange={this.props.onChange}
        />
        <div>
          {this.props.userText}
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}

Thing.propTypes = {
  userText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Thing;