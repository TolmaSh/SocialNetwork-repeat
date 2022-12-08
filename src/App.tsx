import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dialogs} from './components/Dialogs/Dialogs';
import {StatePropsType} from './redux/state';


type PropsType = {
    state: StatePropsType
    addPost: (text:string) => void
}

function App(props:PropsType) {
    const {profilePage,dialogsPage} = props.state
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <div className={'wrapper'}>
                        <Header/>
                        <Navbar/>

                        <Routes>
                            <Route path="/dialogs" element={<Dialogs state={dialogsPage} addPost={props.addPost}/>}/>
                            <Route path="/*" element={<Profile state={profilePage}/>}/>
                        </Routes>
                        <div className={'footer'}>Footer</div>
                    </div>

                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
