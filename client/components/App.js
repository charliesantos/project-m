import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from '../containers/HeaderContainer';
import HomeContainer from '../containers/HomeContainer';

// Required for clicks
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <HomeContainer/>
      </div>
    );
  }
}

export default App;