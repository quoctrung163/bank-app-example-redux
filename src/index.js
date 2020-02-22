import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/index';

const render = () => ReactDOM.render(
    <Provider store={store}>
        <ConnectApp />
    </Provider>,
    document.getElementById('root')
);
render();

registerServiceWorker();
