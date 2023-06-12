import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Login from "../Login/login";
import Register from "../Register/register";
import Blog from "../blog/blog";
import ContactUs from "../contactUs/contactUs";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
