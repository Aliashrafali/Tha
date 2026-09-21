import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () =>{
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        const timer = setTimeout(() =>{
            navigate("/");
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <>
            <Navbar />
            <h1>Welcome to About Page. Our ID is: {id}</h1>
        </>
    )
}

export default About;