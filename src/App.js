import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import PageTeשcher from './components/pageTeacher/pageTeacher';
import accountTeacher from './components/accountTeacher/accountTeacher';
import ProfessionalDetails from './components/Register/professionalDetails';
import AccountPupil from './components/accountPupil/accountPupil';
import ModalCategories from './components/Register/modalCategories';

// import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (

    <div className="App"> 
      <Header />
      {/* <PageTeacher/> */}
       <Body/>
       {/* <AccountPupil/> */}
       {/* <accountTeacher/> */}
       {/* <ProfessionalDetails/> */}
       <Footer /> 
    </div>
  
  );
}


export default App;
