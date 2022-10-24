import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';

function App() {
  return (
    <div className="App">
     <Header/>
        <div>
            <Navbar/>
            <Profile/>
        </div>
    </div>
  );
}

export default App;
