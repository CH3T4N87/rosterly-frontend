import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar.jsx";
import Student from "../Student/Student.jsx";
import "./Dashboard.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true); //loading state
    const fetchStudents = async () => {
      try {
        const res = await axios.get("https://rosterly-backend.onrender.com/student/getAll");
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);
  const handleDeleteUI = (id) => {
    setStudents(students.filter((s) => s._id !== id));
    toast.success("🗑️ Student deleted successfully!");
  };
  return (
    <div className="dashboard">
      <Navbar />
      <ToastContainer position="bottom-right" autoClose={3000} />
      {
        loading ? (
          <div className="alert alert-warning text-center">Fetching....(Server is Starting..)</div>
        ) : (
          <div className="students-container">
            {students.length > 0 ? (
              students.map((student) => (
                <Student key={student._id} student={student} onDelete={handleDeleteUI} />
              ))
            ) : (
              <p>No students found</p>
            )}
          </div>
        )
      }
    </div>
  );
};

export default Home;
