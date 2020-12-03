import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import UserContext from './auth/UserContext';
import Navbar from './routes-nav/Navbar';
import Routes from './routes-nav/Routes.js';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Navbar/>
          <Routes/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
