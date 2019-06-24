import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper red darken-6">
            <div className="container">
                <Link to="#" className="brand-logo">SPA Times</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li> 
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/cart">My cart</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)