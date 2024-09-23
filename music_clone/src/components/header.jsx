import React from "react";
import '../css/header.css'
import { NavLink } from "react-router-dom";


const Header = () =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 menu">
                        <nav>
                            <ul>
                                <li><NavLink to={'/home'} className={'nav'}>Home</NavLink></li>
                                <li><NavLink to={'/about'} className={'nav'}>About Us</NavLink></li>
                                <li><NavLink to={'/gallery'} className={'nav'}>Gallery</NavLink></li>
                                <li><NavLink to={'/'} className={'nav'}>Rules & Regulations</NavLink></li>
                                <li><NavLink to={'/'} className={'nav'}>Admission</NavLink></li>
                                <li><NavLink to={'/'} className={'nav'}>Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header