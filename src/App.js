import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
