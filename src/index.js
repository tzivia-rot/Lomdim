import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/contex/authProvider";
import { Route, Router, Routes } from "react-router-dom";

import Login from "./components/LoginOut/login";
import Register from "./components/Register/register";

ReactDOM.render(
  <React.StrictMode>
    <header></header>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ProfilTeacher" element={<profilTeacher />} />
        </Routes>
        <App />
      </AuthProvider>
    </BrowserRouter>

    <footer></footer>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
