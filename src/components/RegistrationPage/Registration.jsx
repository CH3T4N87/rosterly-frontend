import React, { useState } from 'react'
import "./REgistration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../../Navbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const routeTo = useNavigate();
  let [image, setImage] = useState(null);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [course, setCourse] = useState("");
  let [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!image || !name || !email || !course) {
      toast.warning(" All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.warning(" Enter a valid email!");
      return;
    }
    setLoading(true);
    try {
      // create FormData
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("course", course);

      const res = await axios.post(
        "https://rosterly-backend.onrender.com/student/addStudent",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log(res.data);

      if (res.status === 200) {
        toast.success(" Student Registered Successfully!");
        setTimeout(() => routeTo("/dashboard"), 2000);
      } else {
        toast.error(" Failed to register student");
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
            <h3 className='alert alert-info'>Registering...</h3>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Profile Picture</label>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control" name='image' id="image" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name='name' id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name='email' id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="course" className="form-label">Course</label>
              <select name="course" id="course" className='form-select' value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="" disabled>- select -</option>
                <option value="HTML Basics">HTML Basics</option>
                <option value="CSS Mastery">CSS Mastery</option>
                <option value="JavaScript Pro">JavaScript Pro</option>
                <option value="React In Depth">React In Depth</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Registration