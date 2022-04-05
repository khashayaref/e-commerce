import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import Panel from './containers/Panel';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes path=''>
          <Route path='login' element={<Login/>}></Route>
          <Route path='user' element={<Panel/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
