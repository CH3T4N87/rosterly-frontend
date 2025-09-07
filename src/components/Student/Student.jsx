import React from 'react'
import "./Student.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Student = ({ student, onDelete }) => {
    const routeTo = useNavigate();

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this student?")) return;

        try {
            await axios.delete(`https://rosterly-backend.onrender.com/student/delete/${student._id}`);
            // alert("Student deleted!");
            onDelete(student._id);
        } catch (err) {
            console.error(err);
            alert("Failed to delete student!");
        }
    };

    return (
        <div class="card" style={{ width: "22rem" }}>
            <div className="img-div">
                <img src={student.image} alt="" />
            </div>
            <div class="card-body">
                <h5 class="card-title">Name: {student.name}</h5><hr />
                <p class="card-text">Email: {student.email}</p><hr />
                <p class="card-text">Course: {student.course}</p>
                <div className="manage">
                    <button onClick={() => routeTo(`/student/update/${student._id}`)} className="btn btn-outline-secondary">Edit</button>&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Student;