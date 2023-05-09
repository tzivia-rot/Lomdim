import React from 'react';
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* <Router> */}
      <Header />
      {/* <Routes>
        <Route path='/' exact component={Header} />
        <Route path='/about' component={Header} />
        <Route path='/events' component={Header} />
        <Route path='/annual' component={Header} />
        <Route path='/team' component={Header} />
        <Route path='/blogs' component={Header} />
        <Route path='/sign-up' component={Header} />
      </Routes> */}
      <Body />
      <Footer />
    {/* </Router> */}

    </div>
  );
}
export default App;
