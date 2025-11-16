import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function View() {
    

    const [student, getStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/student/view")
            .then(res => getStudent(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>

            <div className="container">
                <Navbar></Navbar>
            </div>

            <style>
                {`
                    table, th, td {
                    border: 2px solid black;
                    border-collapse: collapse;
                    padding: 8px;
                    }
                `}
            </style>
            <div className="container">
                <table border="2" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>studenID</th>
                            <th>name</th>
                            <th>address</th>
                            <th>Date of birth</th>
                            <th>email</th>
                            <th>contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student
                        .map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.address}</td>
                                <td>{row.dob}</td>
                                <td>{row.email}</td>
                                <td>{row.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="container">
                <Footer></Footer>
            </div>
        </>

    )
}

export default View;