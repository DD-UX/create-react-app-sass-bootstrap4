import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';
import './styles.css';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from "./redux/configureStore";

const docRoot = document.getElementById('root');

ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    docRoot
);
registerServiceWorker();
