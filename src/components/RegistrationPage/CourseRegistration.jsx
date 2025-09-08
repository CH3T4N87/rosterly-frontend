import React, { useState } from 'react'
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../../Navbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const routeTo = useNavigate();
  let [courseName, setCourseName] = useState("");
  let [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("regi");
    
    if (!courseName) {
      toast.warning(" All fields are required!");
      return;
    }
    
    setLoading(true);
    try {
      
      const res = await axios.post(
        "https://rosterly-backend.onrender.com/addCourse",
        {
          courseName : courseName
        }
      );

      // console.log(res.data);

      if (res.status === 200) {
        toast.success(" Course Registered Successfully!");
        setTimeout(() => routeTo("/courses"), 2000);
      } else {
        toast.error(" Failed to register Course");
      }
    } catch (e) {
      console.error("Upload error:", e);
      toast.error(" Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='registration-page'>
      <Navbar />
   <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="registration-form">
        {loading ? (
          <div >
            <h3 className='alert alert-info'>Adding...</h3>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
          
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="form-control" name='courseName' id="courseName" />
            </div>
           
            <button type="submit" className="btn btn-primary">Add Course</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Registration