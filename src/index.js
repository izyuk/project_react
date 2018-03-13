import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
// import AppRouter from './routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import Wrapper from './components/wrapper';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

const render = (Component) =>
ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
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