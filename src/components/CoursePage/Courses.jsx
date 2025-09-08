import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://rosterly-backend.onrender.com/getCourses");
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container course-page mt-5">
        <div className="card shadow-lg p-4">
          <div className="card-header bg-dark text-white fw-bold">
            All Courses
          </div>

          {loading ? (
            <div className="p-4 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : courses.length > 0 ? (
            <ul className="list-group list-group-flush">
              {courses.map((course, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex align-items-center"
                >
                  <i className="bi bi-book me-2 text-primary"></i>
                  <span className="fw-medium">{course.courseName}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-muted">
              No courses available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
