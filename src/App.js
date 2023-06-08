import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Body from './components/body/body';
//import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/home/home';
//import About from './components/about/about';


function App() {
  return (

    <div className="App"> 
      <Header /> 
       <Home/>
       <Footer /> 
    </div>
  
  );
}


export default App;
