import React from 'react';

import './index.css';
import {store} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let renderTree = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)