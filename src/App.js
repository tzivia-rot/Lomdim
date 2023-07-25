import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import LessonHistory from './components/accountPupil/lessonHistory';


function App() {
  return (

    <div className="App"> 
      <Header />
      <LessonHistory/>
       {/* <Body/> */}
       <Footer /> 
    </div>
  
  );
}


export default App;
