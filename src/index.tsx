


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateType, } from './redux/state';
import {store} from './redux/state';

export const rerenderState = () => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderState()
store.subscribe(rerenderState)

