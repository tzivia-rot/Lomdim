import React from 'react';
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
//import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/home/home';
//import About from './components/about/about';


function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
      <Router>
        
        <Routes>
          <Route path='/' component={Home} /> */}
          {/* <Route path='/אודות' component={About} />
          <Route path='/events' component={Header} />
          <Route path='/annual' component={Header} />
          <Route path='/team' component={Header} />
          <Route path='/blogs' component={Header} />
          <Route path='/sign-up' component={Header} /> */}
        {/* </Routes>
      </Router>
    </BrowserRouter> */}
       <Header />
       <Home/>
       <Footer />
    </div>
  );
}
export default App;
