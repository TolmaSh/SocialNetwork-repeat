import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';

function App() {
    return (
        <div className="App">
            <div className={'wrapper'}>
                <Header/>
                <Navbar/>
                <div>
                    <Profile/>
                </div>
                <div className={'footer'}>Footer</div>
            </div>

        </div>
    );
}

export default App;
