import { useState } from 'react'
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/HomePage/Home';
import Dashboard from './components/HomePage/Dashboard';
import Registration from './components/RegistrationPage/Registration';
import UpdateStudent from './components/UpdateStudent/UpdateStudent';
function App() {

  return (
   <Routes>
  
     <Route path='/' element={<Home/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/student/registration' element={<Registration/>}/>
     <Route path='/student/update/:id' element={<UpdateStudent/>}/>
   </Routes>
  )
}

export default App;
