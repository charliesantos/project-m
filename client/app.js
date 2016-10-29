import 'babel-polyfill';
import React from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AppContainer from './containers/AppContainer';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { togglePractice, fetchPracticeQuestions } from './actions';
import HomeContainer from './containers/HomeContainer';
import PracticeContainer from './containers/PracticeContainer';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

let onIndex = (nextState, replaceState) => {
  store.dispatch(togglePractice(false));
};

let onPractice = (nextState, replaceState) => {
  store.dispatch(togglePractice(true));
  store.dispatch(fetchPracticeQuestions());
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={HomeContainer} onEnter={onIndex}/>
        <Route path='/practice' component={PracticeContainer} onEnter={onPractice}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);