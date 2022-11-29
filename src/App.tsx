import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';
import {dialogsDataType, messagesDataType, postsDataType} from './index';

type PropsType = {
    dialogs:dialogsDataType[]
    messages:messagesDataType[]
    posts:postsDataType[]
}

function App(props:PropsType) {
    const {dialogs,messages,posts} = props
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <div className={'wrapper'}>
                        <Header/>
                        <Navbar/>

                        <Routes>
                            <Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                            <Route path="/*" element={<Profile posts={posts}/>}/>
                        </Routes>
                        <div className={'footer'}>Footer</div>
                    </div>

                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
