import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Login from "../Login/login";
import Register from "../Register/register";
import Blog from "../blog/blog";
import ContactUs from "../contactUs/contactUs";
import About from "../about/about";
import English from "../SubjectsOfStudy/english";
import Hebrew from "../SubjectsOfStudy/hebrew";
import Math from "../SubjectsOfStudy/math";
import Science from "../SubjectsOfStudy/science";
import PersonalDetails from "../Register/personalDetails";
import ProfilTeacher from "../profilTecher/profilTeacher";
import HowToLearnEnglish from "../blog/items-blogs/howToLearnEnglish";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/howToLearnEnglish" element={<HowToLearnEnglish />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal_details" element={<PersonalDetails />} />
        <Route path="/profil_teacher" element={<ProfilTeacher />} />
        <Route path="/about" element={<About />} />
        <Route path="/english" element={<English />} />
        <Route path="/hebrew" element={<Hebrew />} />
        <Route path="/math" element={<Math />} />
        <Route path="/scince" element={<Science />} />
      </Routes>
    </>
  );
}
