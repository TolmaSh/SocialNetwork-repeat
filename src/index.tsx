


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateType, } from './redux/state';
import {store} from './redux/state';

const getState:any = store.getState()
export const rerenderState = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost} updatePostText={store.updatePostText}/>,
        document.getElementById('root')
    );
}

rerenderState(getState)
store.subscribe(rerenderState)

