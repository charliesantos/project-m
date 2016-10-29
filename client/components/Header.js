import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import config from '../config';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Paper className='paper' zDepth={config.paper.depth}>
          <div className='logo'></div>
          <FlatButton className='company-name' label='Global Workforce Assessment'/>
          <FlatButton className='header-link' label='About'/>
          <FlatButton className='header-link' label='Courses'/>
          <FlatButton className='header-link' label='Contact'/>
        </Paper>
      </div>
    );
  }
}

export default Header;