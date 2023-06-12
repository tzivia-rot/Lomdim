import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';

// import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (

    <div className="App"> 
      <Header /> 
       <Body/>
       <Footer /> 
    </div>
  
  );
}


export default App;
