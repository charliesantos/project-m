import 'babel-polyfill';
import React from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AppContainer from './containers/AppContainer';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import HomeContainer from './containers/HomeContainer';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);