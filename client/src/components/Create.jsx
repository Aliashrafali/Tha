import React, { useState } from "react";
import Navbar from "./Navbar";
import { addUser } from "../service/api.js";

const Create = () =>{
    const [user, setUser] = useState({
        name:'',
        mobile:'',
        email:'',
        image:''
    });

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user);
    }

    const fileData = (e) =>{
        setUser({...user, image : e.target.files[0]});
    }

    const submitData = async (e) =>{
        e.preventDefault();
        // validation 
        if(!user.name){
            alert("Enter your name");
            return;
        }
        if(!user.mobile){
            alert("Enter your mobile");
            return;
        }
        if(user.mobile.length !== 10){
            alert("Enter 10 digit mobile no");
            return;
        }
        if(!user.email){
            alert("Enter email id");
            return;
        }
        if(!user.image){
            alert("Upload your image");
        }

        const formData = new FormData() // for file handling (image,pdf,)
        formData.append('image', user.image, user.image.name);
        formData.append('name', user.name);
        formData.append('mobile', user.mobile);
        formData.append('email', user.email);
        try {
            const res = await addUser(formData);
            if(res.status === 201){
                 alert(res.data.message);
            }else{
                alert("Something went wrong. try after sometime");
            }
        } catch (error) {
            console.log("Error while inserting data", error);
        }
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
                                    <span><b>Fill Student's Details</b></span>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Name <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input type="text" name="name" onChange={onValueChange} className="form-control" placeholder="Enter your name"></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Mobile No <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input type="text" name="mobile" onChange={onValueChange} className="form-control" placeholder="Enter your mobile"></input>
                                        </div>

                                         <div className="form-group">
                                            <label>Email Id <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input type="email" name="email" onChange={onValueChange} className="form-control" placeholder="Enter your email id"></input>
                                        </div>

                                        <div className="form-group">
                                            <label>Image <sup><span style={{color:'red'}}>*</span></sup></label>
                                            <input type="file" name="image" onChange={fileData} className="form-control"></input>
                                        </div>

                                        <button className="btn btn-primary" onClick={submitData}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create;