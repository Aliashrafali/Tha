import React from "react";
import Students from "./Students";

const StudentData = () =>{
    return(
        <>
            {
                Students.map((item) =>{
                    return(
                        <h1>Name : {item.name}, Age : {item.age},  Skill : {item.skill}, Status : {item.status === 1 ? 'Active' : 'In-active'}</h1>
                    )
                })
            }
        </>
    )
}

export default StudentData;