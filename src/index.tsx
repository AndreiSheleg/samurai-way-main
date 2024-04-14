import React from 'react';

import './index.css';
import {RootStateType, store} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*                <App state={state} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
            <App state={state} dispatch={store.dispatch.bind(store)} />

        </BrowserRouter>, document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(renderTree)