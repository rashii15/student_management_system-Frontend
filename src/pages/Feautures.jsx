
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from 'axios';
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Features(){

    const navigate = useNavigate();
    const[savedStudent,save] = useState({
        "id" : "",
        "name" : "",
        "address" : "",
        "DOB" : "",
        "email" : "",
        "contact" : "",
    });

    const handleChange = (e) => { save({ ...savedStudent, [e.target.name]: e.target.value }); };

    const addStudent = () => {
        axios.post("http://localhost:8080/student/add",savedStudent)
    .then(res => console.log("data added!!")
        )
    .catch(err => console.log(err))
    };
    
    return(
       <>
            <div className="container">
                <Navbar></Navbar>
                <input type="text" className="input" placeholder="StudenID" onChange={handleChange}/>
                <input type="text" className="input" placeholder="name"  onChange={handleChange}/>
                <input type="text" className="input" placeholder="address"  onChange={handleChange}/>
                <input type="text" className="input" placeholder="Date of birth"  onChange={handleChange}/>
                <input type="text" className="input" placeholder="email"  onChange={handleChange}/>
                <input type="text" className="input" placeholder="contact"  onChange={handleChange}/>
                
                <br />
                <br />
                <button className="button button:hover" onClick={addStudent}> Add Student </button>
                <button className="button button:hover"> Search Student </button>
                <button className="button button:hover"> Update Student </button>
                <button className="button button:hover"> Delete Student </button>
                <Footer></Footer>
            </div>
       </>
    )
}

export default Features;