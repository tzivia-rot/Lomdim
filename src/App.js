import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './components/LoginOut/login';
import Register from './components/Register/register';
import Body from './components/body/body';

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
