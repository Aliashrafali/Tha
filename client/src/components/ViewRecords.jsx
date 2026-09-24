import React from "react";
import Navbar from "./Navbar";
import { getUsers } from "../service/api.js";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ViewRecords = () =>{

    const [user, setUser] = useState([]);

    useEffect(() =>{
        getAllUsers();
    });

    const getAllUsers = async () =>{
        const res = await getUsers();
        setUser(res.data);
    }

    return(
        <>
            <Navbar />
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <span><b>User Details</b></span>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered w-100">
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Email Id</th>
                                                <th>Image</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                user.map((item, key) =>{
                                                    return(
                                                        <tr>
                                                            <td>{key+=1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.mobile}</td>
                                                            <td>{item.email}</td>
                                                            <td>
                                                                <img src={`http://localhost:8000/uploads/${item.image}`} alt="img" height={'60px'} width={'60px'} className="img-thumbnail"></img>
                                                            </td>
                                                            <td>
                                                                <NavLink to={''}><span class="badge rounded-pill text-bg-primary me-1">Edit Details</span></NavLink>
                                                                <NavLink to={''}><span class="badge rounded-pill text-bg-danger">Delete</span></NavLink>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ViewRecords;