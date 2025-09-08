import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateStudent = () => {
  const { id } = useParams();
  const routeTo = useNavigate();

  const [pic, setPic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  let [loading, setLoading] = useState(false);
  let [courses, setCourses] = useState([]);

  // fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://rosterly-backend.onrender.com/getCourses");
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
        toast.error("Failed to load courses");
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get("https://rosterly-backend.onrender.com/student/getAll");
        const student = res.data.find((s) => s._id === id);
        if (student) {
          setName(student.name);
          setEmail(student.email);
          setCourse(student.course);
          setPreview(student.image);
          console.log(name, email);

        }
      } catch (err) {
        console.error("Error fetching student:", err);
        toast.error("❌ Failed to fetch student")
      }
    };
    fetchStudent();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      if (pic) formData.append("pic", pic);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("course", course);

      await axios.put(`https://rosterly-backend.onrender.com/student/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(" Student updated successfully!")
      setTimeout(() => routeTo("/dashboard", 2000));
    } catch (err) {
      console.error(err);
      toast.error(" Failed to update")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <Navbar />
      <div className="registration-form">
        {
          loading ? (<div >
            <h3 className='alert alert-info'>Updating...</h3>
          </div>) : (
            <form onSubmit={handleUpdate}>
              {/* Profile Picture */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={(e) => {
                    setPic(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    style={{ marginTop: "10px", width: "100px", borderRadius: "8px" }}
                  />
                )}
              </div>

              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="name"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="email"
                />
              </div>

              {/* Course */}
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <select
                  id="course"
                  className="form-select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="" disabled>
                  - select -
                </option>
                {courses.map((c, idx) => (
                  <option key={idx} value={c.courseName}>
                    {c.courseName}
                  </option>
                ))}
                </select>
              </div>

              <button type="submit" className="btn btn-warning">
                Update
              </button>
            </form>
          )
        }
      </div>
    </div>
  );
};

export default UpdateStudent;
