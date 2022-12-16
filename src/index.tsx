


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StatePropsType, subscriber, updatePostText} from './redux/state';
import {state} from './redux/state';

export const rerenderState = (state: StatePropsType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updatePostText={updatePostText}/>,
        document.getElementById('root')
    );
}

rerenderState(state)
subscriber(rerenderState)

