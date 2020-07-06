import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sidebar></Sidebar>
      </header>
    </div>
  );
}

export default App;
