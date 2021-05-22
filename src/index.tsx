import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { ConfirmProvider } from 'material-ui-confirm';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfirmProvider>
      <App />
    </ConfirmProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
