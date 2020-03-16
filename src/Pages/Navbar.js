import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">New React App</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
        </nav>
        
    )
};

export default withRouter(Navbar);





//1. create a function based component for navbar
//2. install react-router-dom
//3. import link,with router from react-router-dom
