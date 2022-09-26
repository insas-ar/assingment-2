import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import Navbar from './component/navbar/Navbar';
import './App.css'
import Home from './component/menus/Home'
import StartUps from './component/menus/StartUps';
import Investor from './component/menus/Investor';
import Profile from './component/menus/Profile';
import SignUp from './component/menus/SignUp';

function App() {
  return (
    <div className="App">
   
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route path="/startups"  element={<StartUps />} />
      <Route path="/investors"  element={<Investor />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
    </BrowserRouter>
   
      
    </div>
    
  );
}

export default App;
