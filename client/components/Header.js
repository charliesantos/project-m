import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {
  render() {
    let buttons = [];
    if(this.props.isPractice) {
      buttons.push(<FlatButton className='header-link' label='Summary'/>);
      buttons.push(<FlatButton className='header-link' label='Your Test'/>);
      buttons.push(<FlatButton className='header-link' label='My Profile'/>);
      buttons.push(<FlatButton className='header-link' label='Home'/>);
    } else {
      buttons.push(<FlatButton className='header-link' label='About'/>);
      buttons.push(<FlatButton className='header-link' label='Courses'/>);
      buttons.push(<FlatButton className='header-link' label='Contact'/>);
    }
    let headerClass = 'header' + (this.props.isPractice ? ' testmode' : '');
    return (
      <div className={headerClass}>
        <Paper className='paper' zDepth={2}>
          <div className='menu'>
            <div className='logo'></div>
            <FlatButton
              onClick={this.props.onLogoClick}
              className='company-name'
              label='Global Workforce Assessment'/>
            { buttons }
          </div>
          <div className='timer-bar'>
            <div className='timer'>{'Time Remaining: 00:30:00'}</div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Header;