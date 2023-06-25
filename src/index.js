import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./components/contex/authProvider";
//import { Route, Router, Routes } from "react-router-dom";

// import About from './components/about/about.js';
// import Blog from './components/blog/blog';
// import Login from "./components/Login/login";
// import Register from "./components/Register/register";
// import { FaBlog } from "react-icons/fa";
// import ProfilTeacher from './components/profilTecher/profilTeacher';
// import ContactUs from "./components/contactUs/contactUs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <App />
        {/*<Routes>
           <Route path="/"/>
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profilTeacher" element={<ProfilTeacher/>} /> 
        </Routes>*/}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
