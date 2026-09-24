import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 menu">
                            <nav>
                                <ul>
                                    <li><NavLink to={'/'} className={'nav'}>Dashboard</NavLink></li>
                                    <li><NavLink to={'/Create'} className={'nav'}>Create</NavLink></li>
                                    <li><NavLink to={'/ViewRecords'} className={'nav'}>View Records</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>Login</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>Contact Us</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;