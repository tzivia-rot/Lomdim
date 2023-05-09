import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/recomment" element={<Recomment />} /> */}
        {/* <Route index element={<Register />} /> */}
        {/* <Route path="loginOut" element={<LoginOut />} />
          <Route path="login" element={<Login />} /> */}
      </Routes>
    </>
  );
}
