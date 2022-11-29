import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id:number
    message:string
}
export type postsDataType = {
    id:number
    post:string
}
const dialogsData:dialogsDataType[] = [
    {id:1, name: 'Tim'},
    {id:2, name: 'Bob'},
    {id:3, name: 'John'},
    {id:4, name: 'Olga'},
    {id:5, name: 'Horton'},
    {id:6, name: 'Harry'},
    {id:7, name: 'Sergey'},
]

const messagesData:messagesDataType[] = [
    {id:1, message: 'Hi'},
    {id:2, message: 'Hey'},
    {id:3, message: 'Bye'},
    {id:4, message: 'How are you?'},
    {id:5, message: 'I`m fine , thank you'},
]
const postsData:postsDataType[] = [
    {id: 1, post: 'Hi'},
    {id: 2, post: 'I see you'},
    {id: 3, post: 'I want drink beer'},
    {id: 4, post: 'How are you?'},
]


ReactDOM.render(
    <App dialogs={dialogsData} messages={messagesData} posts={postsData} />,
  document.getElementById('root')
);