import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import ThingContainer from '../containers/ThingContainer';

// Required for clicks
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <ThingContainer/>
      </div>
    );
  }
}

export default App;