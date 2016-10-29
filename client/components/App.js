import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from '../containers/HeaderContainer';

// Required for clicks
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeaderContainer/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;