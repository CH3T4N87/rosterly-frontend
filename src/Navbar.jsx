import React from 'react'
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const routeTo = useNavigate();
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="khiskanaPadega container-fluid">
                <a class="navbar-brand text-white" onClick={() => routeTo("/")}>Rosterly</a>
                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <button class="btn btn-outline-light" aria-current="page" onClick={() => routeTo("/dashboard")}>Dashboard</button>
                        <button class="btn btn-outline-light" onClick={() => routeTo("/student/registration")} >Add Student</button>
                        <button class="btn btn-outline-light" onClick={() => routeTo("/addCourse")} >Add Course</button>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;