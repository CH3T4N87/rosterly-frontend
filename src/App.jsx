import { useState } from 'react'
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/HomePage/Home';
import Dashboard from './components/HomePage/Dashboard';
import Registration from './components/RegistrationPage/Registration';
import UpdateStudent from './components/UpdateStudent/UpdateStudent';
import CourseRegistration from "./components/RegistrationPage/CourseRegistration";
import Courses from './components/CoursePage/Courses';
function App() {

  return (
   <Routes>
  
     <Route path='/' element={<Home/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/student/registration' element={<Registration/>}/>
     <Route path='/student/update/:id' element={<UpdateStudent/>}/>
     <Route path='/courses' element={<Courses/>}/>
     <Route path='/addCourse' element={<CourseRegistration/>}/>
   </Routes>
  )
}

export default App;
