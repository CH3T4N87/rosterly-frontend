import React from 'react'
import Navbar from '../../Navbar';
import "./Home.css";
import heroImg from "../../assets/hero.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const routeTo = useNavigate();
  return (
    <div className='homePage'>
        <Navbar/>
        <div className="hero-section mt-5">
          <div className="left-section">
            <img src={heroImg} alt="" />
          </div>
          <div className="right-section">
            <h2 className='mb-3'>NavGurukul Presents Rosterly</h2>
            <hr />
            <i >The smart way to manage student data.</i>
            <hr />
            <p className='mt-4'><b>Rosterly</b> is a simple and powerful student management tool designed to make tracking, updating, and organizing student records effortless. Add new students, update their details, or remove them in just a few clicks. Whether it’s names, emails, courses, or profile pictures. <b>Rosterly</b> helps you keep everything organized in one place.</p>
              <button className="btn btn-warning" onClick={()=>routeTo("/courses")}>View Courses</button>
            <hr />
            <div className="actions">
              <button className="btn btn-outline-primary" onClick={()=>routeTo("/student/registration")}>Get Started</button> &nbsp;&nbsp;
              <button className="btn btn-primary" onClick={()=>routeTo("/dashboard")}>View Students</button> &nbsp;&nbsp;
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home