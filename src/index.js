import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
// import AppRouter from './routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import Wrapper from './components/wrapper';
import Admin from './components/admin/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

const render = (Component) =>
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={Wrapper}/>
        <Route path="/admin" component={Admin}/>
      </Router>
    </Provider>,
    document.getElementById('general')
  );

render(Wrapper);
if (module.hot) {
  module.hot.accept('./components/wrapper', () => {
    require('./components/wrapper');
    render(Wrapper);
  });
}
registerServiceWorker();